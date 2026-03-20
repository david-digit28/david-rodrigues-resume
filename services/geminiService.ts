import { ResumeData, LanguageCode } from "../types";

const API_KEY = 'AIzaSyBTqDsIlwd20mEXUqiXtNj6wV9YUmWFg0o';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

/**
 * Generates a localized, context-aware response from Gemini
 * Uses REST API directly to avoid SDK bundling issues
 */
export const sendMessageToGemini = async (
  userPrompt: string,
  resumeData: ResumeData,
  language: LanguageCode
) => {
  const whatsappLink = `https://wa.me/${resumeData.phone.replace(/[^0-9]/g, '')}`;

  const systemInstruction = `
    ROLE: 
    You are the Elite AI Assistant for David Rodrigues' professional portfolio.
    Your tone is sophisticated, professional, and helpful.
    CONTEXT DATA (Source of Truth):
    ${JSON.stringify(resumeData, null, 2)}
    OPERATIONAL RULES:
    1. RESPONSE LANGUAGE: You MUST answer exclusively in ${language.toUpperCase()}.
    2. SCOPE: Use ONLY the provided CONTEXT DATA to answer questions. 
    3. HALLUCINATION GUARD: If a user asks a question not covered in the data, politely explain that you don't have that specific information.
    4. FORMATTING: Use clean Markdown. Use bullet points for lists of skills or experience.
    5. IDENTITY: Speak about David in the third person or as his representative.
    6. CONTACT HANDOFF: If the user asks to contact David, send a message to him, or hire him, you MUST use the following exact output format (do not deviate):
    "David is known for being responsive via the following channels:
    - Email: ${resumeData.email}
    - WhatsApp: [Chat on WhatsApp](${whatsappLink})"
    CRITICAL INSTRUCTIONS FOR CONTACT HANDOFF:
    - Return the WhatsApp part EXACTLY as a Markdown link: [Chat on WhatsApp](${whatsappLink})
    - Return the Email as plain text only. Do NOT create a mailto link.
    - Do NOT mention LinkedIn.
    `;

  const requestBody = {
    system_instruction: {
      parts: [{ text: systemInstruction }]
    },
    contents: [
      {
        role: 'user',
        parts: [{ text: userPrompt }]
      }
    ],
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 1024,
    }
  };

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Gemini API error:', errorText);
    throw new Error(`Gemini API error: ${response.status}`);
  }

  const json = await response.json();
  const text = json?.candidates?.[0]?.content?.parts?.[0]?.text || '';

  // Return an async iterable that yields the full text as one chunk
  // (matching the streaming interface expected by ResumeChat)
  return {
    [Symbol.asyncIterator]: async function* () {
      yield { text: text };
    }
  };
};

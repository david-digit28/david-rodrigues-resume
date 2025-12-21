import type { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ResumeData, LanguageCode } from "../types";

/**
 * Generates a localized, context-aware streaming response from Gemini
 */
export const sendMessageToGemini = async (
  userPrompt: string, 
  resumeData: ResumeData, 
  language: LanguageCode
) => {
  // DYNAMIC IMPORT: This is crucial for the white screen fix.
  // We load the SDK only when needed, preventing load-time errors.
  let GoogleGenAIClass: typeof GoogleGenAI;
  
  try {
    // @ts-ignore - Vite treats this as external due to config
    const module = await import("@google/genai");
    GoogleGenAIClass = module.GoogleGenAI;
  } catch (e) {
    console.error("Failed to load GenAI SDK:", e);
    throw new Error("AI SDK could not be loaded. Please check your internet connection.");
  }

  // Initialize the API
  const ai = new GoogleGenAIClass({ apiKey: process.env.API_KEY || 'MISSING_KEY' });

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

  try {
    // Use gemini-3-flash-preview for optimal text generation performance
    const response = await ai.models.generateContentStream({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response;
  } catch (error) {
    console.error("Gemini Service Error:", error);
    throw error;
  }
};

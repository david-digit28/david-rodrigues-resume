import { ResumeData, LanguageCode } from "../types";

/**
 * Generates a localized, context-aware response from Gemini
 * Calls the /api/chat Vercel serverless function to avoid CORS issues
 */
export const sendMessageToGemini = async (
  userPrompt: string,
  resumeData: ResumeData,
  language: LanguageCode
) => {
  const whatsappLink = `https://wa.me/${(resumeData.phone || '').replace(/[^0-9]/g, '')}`;

  // Build a compact context summary to avoid large payloads
  const context = {
    name: resumeData.name,
    email: resumeData.email,
    phone: resumeData.phone,
    title: resumeData.title,
    about: resumeData.about,
    location: resumeData.location,
    skills: (resumeData.skills || []).map((s: any) => s.name),
    experience: (resumeData.experience || []).map((e: any) => ({
      role: e.role,
      company: e.company,
      period: e.period,
      bullets: e.bullets,
    })),
    education: resumeData.education,
    certifications: resumeData.certifications,
    languages: resumeData.languages,
  };

  const systemInstruction = `You are Nexus, the AI Assistant for David Rodrigues' professional portfolio.
Respond ONLY in ${language.toUpperCase()}. Be professional and concise.
Use ONLY the data below. If something is not in the data, say you don't have that information.
For contact: Email: ${resumeData.email} | WhatsApp: [Chat on WhatsApp](${whatsappLink})
Do NOT create mailto links. Do NOT mention LinkedIn.

DATA:
${JSON.stringify(context)}`;

  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userPrompt, systemInstruction }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('API error:', response.status, errorText);
    throw new Error(`API error: ${response.status}`);
  }

  const json = await response.json();
  const text = json?.text || '';

  // Return an async iterable that yields the full text as one chunk
  return {
    [Symbol.asyncIterator]: async function* () {
      yield { text: text };
    }
  };
};

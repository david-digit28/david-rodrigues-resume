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
  // Professional identity constants
  const professionalEmail = "hi@david-rds.com";
  const whatsappLink = `https://wa.me/${(resumeData.phone || '').replace(/[^0-9]/g, '')}`;

  // Build a compact context summary to avoid large payloads
  const context = {
    name: resumeData.name,
    email: professionalEmail,
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
    projects: (resumeData.projects || []).map((p: any) => ({
      title: p.title,
      description: p.description,
      tags: p.tags,
    })),
    education: resumeData.education,
    certifications: resumeData.certifications,
    languages: resumeData.languages,
  };

  // SYSTEM INSTRUCTION: Optimized for multilingual ROI-focused responses
  const systemInstruction = `You are Nexus, the strategic AI Assistant for David Rodrigues' portfolio.

STRICT LANGUAGE RULE:
- You must respond ONLY in ${language.toUpperCase()}. 
- If the language is EN, respond in English.
- If the language is FR, respond in French.
- If the language is DE, respond in German.
- Never state that you only speak English. You are a multilingual expert.

CORE STRATEGY:
- Be professional, strategic, and ROI-focused.
- Emphasize David's 16+ years of experience in Digital Transformation and Operations.
- Highlight specific business impacts: 70% processing time reduction and 40% annual savings.
- Use ONLY the provided data. If info is missing, ask the user to contact David.

CONTACT INFO:
- Email: ${professionalEmail}
- WhatsApp: [Chat on WhatsApp](${whatsappLink})

CONSTRAINTS:
- Do NOT create mailto links.
- Do NOT mention LinkedIn.
- Be concise.

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

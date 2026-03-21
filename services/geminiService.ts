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
  // Use the new professional email
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
    education: resumeData.education,
    certifications: resumeData.certifications,
    languages: resumeData.languages,
  };

  const systemInstruction = `You are Nexus, the strategic AI Assistant for David Rodrigues' portfolio.
Respond ONLY in ${language.toUpperCase()}. Be professional, strategic, and ROI-focused.
When discussing David's 16+ years of experience, emphasize business impact and digital transformation success.
Use ONLY the data below. If information is missing, politely ask the user to contact David.

CONTACT DETAILS:
- Email: ${professionalEmail}
- WhatsApp: [Chat on WhatsApp](${whatsappLink})

RULES:
- Do NOT create mailto links.
- Do NOT mention LinkedIn.
- Be concise and professional.

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

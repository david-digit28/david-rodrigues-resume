import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse JSON bodies
  app.use(express.json());

  // API endpoint matching /api/chat
  app.post('/api/chat', async (req, res) => {
    try {
      const API_KEY = process.env.GEMINI_API_KEY || '';
      
      if (!API_KEY) {
        console.error('GEMINI_API_KEY is not defined in the environment.');
        return res.status(500).json({ error: 'Gemini API Key is not configured on the server.' });
      }

      const { userPrompt, systemInstruction: incomingInstruction } = req.body;
      const systemInstruction = incomingInstruction || "You are Nexus, David Rodrigues' Strategic AI Assistant.";

      // Use stable workhorse model gemini-2.5-flash as default, or fallback to the requested model.
      const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

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

      const geminiRes = await fetch(GEMINI_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });

      if (!geminiRes.ok) {
        const errorText = await geminiRes.text();
        console.error('Gemini API error:', errorText);
        return res.status(geminiRes.status).json({ error: errorText });
      }

      const data = await geminiRes.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
      return res.status(200).json({ text });
    } catch (error: any) {
      console.error('API Handler error:', error);
      return res.status(500).json({ error: error.message || 'Internal server error' });
    }
  });

  // Serve static folders inside /public (like 'proposal-for-spr' and 'restaurant-digital-roadmap')
  app.use(express.static(path.join(process.cwd(), 'public')));

  // Vite middleware setup
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

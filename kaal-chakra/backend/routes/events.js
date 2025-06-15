const express = require("express");
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.get("/", async (req, res) => {
  const { year, role, topic } = req.query;

  console.log("📥 Received query params:");
  console.log("   - year:", year);
  console.log("   - role:", role);
    console.log("   - topic:", topic);

  if (!year || !role) {
    return res.status(400).json({ error: "Missing year or role parameter" });
  }

  try {
    const model = genAI.getGenerativeModel({
      model: "models/gemini-1.5-flash",
    }); // ✅ correct model string

const prompt = `
  Generate 5 important historical events that happened in **India** in the year ${year} 
  that would interest someone with the role of "${role}"${topic ? ` and related to the topic "${topic}"` : ""}.
  Only include events that are clearly part of **Indian history**.
  Return a JSON array where each event has:
  {
    "id": string,
    "title": string,
    "date": string,
    "location": string,
    "description": string,
    "category": string,
    "significance": string
  }.
`;



    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    console.log("Raw Gemini Response:", text);

    const cleaned = text.replace(/```json|```/g, "").trim();
    const dataMatch = cleaned.match(/\[.*\]/s);

    let json = [];

    try {
      json = dataMatch ? JSON.parse(dataMatch[0]) : [];
    } catch (err) {
      console.error("JSON Parse Error:", err);
    }
    const targetYear = parseInt(year);
    json = json.filter((e) => {
      const hasRequiredFields = e.id && e.title && e.date && e.description;

      // Try to extract a 4-digit year from e.date
      const yearMatch = e.date.match(/\b(19|20)\d{2}\b/);
      const eventYear = yearMatch ? parseInt(yearMatch[0]) : null;

      return hasRequiredFields && eventYear === targetYear;
    });

    res.json(json);
  } catch (err) {
    console.error("Gemini API Error:", err);
    res.status(500).json({ error: "Failed to fetch events from Gemini" });
  }
});

router.post("/generate-script", async (req, res) => {
  const { title, description, significance } = req.body;

  if (!title || !description || !significance) {
    return res.status(400).json({ error: "Missing event data" });
  }

  const prompt = `
    Create a short, engaging video script (under 90 seconds) to explain this historical event to a general audience:
    
    Title: ${title}
    Description: ${description}
    Significance: ${significance}
    
    Use a friendly tone and conclude with why it matters today.
  `;

  try {
    const model = genAI.getGenerativeModel({ model: "models/gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.json({ script: text.trim() });
  } catch (err) {
    console.error("Script generation error:", err);
    res.status(500).json({ error: "Failed to generate script" });
  }
});

const path = require('path');
const generateVoice = require('../utils/textToSpeech');

router.post("/generate-audio", async (req, res) => {
  const { script, filename } = req.body;
  const outputPath = path.join(__dirname, `../public/audios/${filename}.mp3`);

  try {
    await generateVoice(script, outputPath);
    res.json({ audioUrl: `/audios/${filename}.mp3` });
  } catch (err) {
    console.error("TTS Error:", err);
    res.status(500).json({ error: "Failed to generate audio" });
  }
});


// ✅ THIS LINE WAS MISSING
module.exports = router;

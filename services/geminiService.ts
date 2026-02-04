
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getStylingAdvice(userPrompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: "You are a luxury jewelry stylist for Vareeka. You are elegant, sophisticated, and helpful. Keep responses concise (under 2 sentences). Recommend jewelry pieces from the 'Corine', 'Thalia', and 'Alejandra' collections based on the user's occasion or mood.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently re-polishing my collections. Please ask me again in a moment, darling.";
  }
}

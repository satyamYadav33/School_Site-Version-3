
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the SGN International School Virtual Assistant. 
Our school values: Excellence, Integrity, and Compassion.
Our mission: To provide world-class education with a focus on holistic development.
Our principal: Dr. Anita Sharma.
Academic Levels: Primary (Grade 1-5), Secondary (Grade 6-10), Senior Secondary (Grade 11-12).
Admissions are open for the upcoming academic year.
Help users with information about admissions, curriculum, events, and school policies.
Be professional, welcoming, and concise.
If you don't know an answer, direct them to the contact page or to call +1 (555) 123-4567.
`;

export const getSchoolChatResponse = async (userMessage: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my database right now. Please try again or contact our front office directly.";
  }
};

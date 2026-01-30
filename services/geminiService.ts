import { GoogleGenAI, Chat } from "@google/genai";

// Initialize Gemini client
// Note: In a production Vercel environment, this key would be in the settings.
// For this demo, we assume process.env.API_KEY is available.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are 'Chef Pierre', the virtual assistant for 'Pâte & Fondant', a prestigious restaurant and patisserie located in Houmet Souk, Djerba, Tunisia.
Your tone is welcoming, polite, and appetizing. You speak both French and English fluently.

Key Information:
- Location: La municipalité, Houmet souk, Djerba, Tunisia.
- Phone: 96078268
- Email: pateetfondant@hotmail.com
- Specialties: Pastries (Croissants, Fondants), Savory tarts, and Local Tunisian delights.
- Status: Currently Open.

Your goal is to answer customer questions about the menu, location, and opening status.
If someone asks for a reservation, kindly ask them to call the phone number provided.
Keep responses concise (under 50 words unless asked for more details).
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const session = getChatSession();
    const result = await session.sendMessage({ message });
    return result.text || "I apologize, I am having trouble finding the words right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing high traffic. Please call us directly at 96078268.";
  }
};

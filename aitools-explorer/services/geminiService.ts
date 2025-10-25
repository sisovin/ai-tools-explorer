
import { GoogleGenerativeAI } from "@google/generative-ai";
import Constants from 'expo-constants';

const apiKey = Constants.expoConfig?.extra?.GEMINI_API_KEY || process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.warn("GEMINI_API_KEY environment variable not set. Gemini API calls will fail.");
  throw new Error("Gemini API key is required");
}

const genAI = new GoogleGenerativeAI(apiKey);

export const generateUseCases = async (toolName: string, toolDescription: string): Promise<string> => {
  const prompt = `
    Based on the AI tool "${toolName}" which is described as "${toolDescription}", generate 3 creative and practical use cases for a professional in the tech industry.
    Format the response as a markdown list with bold titles for each use case.
    Example:
    - **Use Case 1:** A brief description.
    - **Use Case 2:** A brief description.
    - **Use Case 3:** A brief description.
  `;

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text || "No response generated.";
  } catch (error) {
    console.error("Error generating use cases:", error);
    return "Sorry, I couldn't generate use cases at the moment. Please check the API key and try again.";
  }
};

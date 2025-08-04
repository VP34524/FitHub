import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function generateFitnessContent(userData: {
  age: number;
  weight: number;
  height: number;
  diet: string;
  weightGoal: string;
  workoutTime: number;
}) {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

  const prompt = `Generate a structured, HTML-formatted personalized fitness and nutrition plan for a user with:
    - Age: ${userData.age}
    - Weight: ${userData.weight} kg
    - Height: ${userData.height} cm
    - Diet: ${userData.diet}
    - Weight Goal: ${userData.weightGoal}
    - Workout Time: ${userData.workoutTime} minutes per day

    Format it with:
    - Headings for each section
    - Bulleted lists where necessary
    - Clearly defined meal plans and exercises
    - Weekly workout schedule
    - Tips for achieving their goals
    - Expected timeline for results
    - Use appropriate HTML tags for structure.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

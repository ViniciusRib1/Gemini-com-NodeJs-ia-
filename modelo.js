import { GoogleGenerativeAI } from '@google/generative-ai';

export async function inicializaModelo(modelo) {
  const genAI = new GoogleGenerativeAI(GEMINIKEY); // Colocar a sua key do gemini
  const model = genAI.getGenerativeModel({ model: modelo});
  return model;
}
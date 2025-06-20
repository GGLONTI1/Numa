import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.OPENA_API_KEY,
});

export const DEFAULT_MODEL = "gpt-3.5-turbo";

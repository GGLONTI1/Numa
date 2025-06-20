import OpenAI from "openai";

if (!process.env.OPENAI_API_KEY) {
  throw new Error("Cannot find key");
}

export const openai = new OpenAI({
  apiKey: process.env.OPENA_API_KEY,
});

export const DEFAULT_MODEL = "gpt-3.5-turbo";

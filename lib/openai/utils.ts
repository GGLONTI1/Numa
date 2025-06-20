import { openai, DEFAULT_MODEL } from "./config";

export async function analyzeText(text: string, question: string) {
  try {
    const response = await openai.chat.completions.create({
      model: DEFAULT_MODEL,
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant lawyer who speaks Georgian that analyzes text and provides a summary of the text.",
        },
        {
          role: "user",
          content: `Analyze the following text: ${text} and answer the following question: ${question}`,
        },
      ],
    });
    return response.choices[0].message.content || "გთხოვთ მიმართოთ პრესცენტრს";
  } catch (error) {
    console.error("Error in analyzeText:", error);
    throw new Error("Failed to analyze text");
  }
}

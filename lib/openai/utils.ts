import { openai, DEFAULT_MODEL } from "./config";

export async function analyzeText(text: string, question: string) {
  try {
    const response = await openai.chat.completions.create({
      model: DEFAULT_MODEL,
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant lawyer. Think and analyze the text in English for better understanding, but ALWAYS provide your final answer in Georgian language. Keep your responses BRIEF and CONCISE with maximum 1-2 sentences in Georgian. IMPORTANT: Provide ONLY ONE answer - do not repeat, duplicate, or give multiple variations of the same information.",
        },
        {
          role: "user",
          content: `Analyze the following text: ${text} and answer the following question: ${question}`,
        },
      ],
    });
    return (
      response.choices[0].message.content ||
      "ბოდიში, ვერ მოვახერხე ტექსტის ანალიზი. გთხოვთ თავიდან სცადოთ."
    );
  } catch (error) {
    console.error("Error in analyzeText:", error);
    throw new Error("Failed to analyze text");
  }
}

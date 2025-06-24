export const fetchOpenAI = async (question: string) => {
  const response = await fetch("/api/test-openai", {
    method: "POST",
    body: JSON.stringify({ question }),
  });

  return response.json();
};

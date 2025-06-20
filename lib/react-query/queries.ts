"use client";
import { fetchOpenAI } from "@/app/page";
import { useMutation } from "@tanstack/react-query";

export function useAnalyzeText() {
  return useMutation({
    mutationFn: ({ question }: { question: string }) => fetchOpenAI(question),
  });
}

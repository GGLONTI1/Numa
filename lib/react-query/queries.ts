"use client";
import { fetchOpenAI } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";

export function useAnalyzeText() {
  return useMutation({
    mutationFn: ({ question }: { question: string }) => fetchOpenAI(question),
  });
}

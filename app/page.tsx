"use client";

import { SearchBox } from "@/components/search-box";
import { useAnalyzeText } from "@/lib/react-query/queries";
import { Loader2 } from "lucide-react";

import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const {
    mutateAsync: fetchOpenAI,
    isPending: isGettingResponse,
    error,
    isSuccess,
  } = useAnalyzeText();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search query:", query);

    const data = await fetchOpenAI({ question: query });
    setAnswer((data as { answer: string }).answer);
  };

  const handleChange = (value: string) => {
    setQuery(value);
  };

  const handleResearch = () => {
    window.open(`https://www.google.com/search?q=${query}`, "_blank");
  };

  return (
    <div className="flex flex-col items-center  justify-center min-h-[calc(100vh-200px)] px-6">
      <div className="w-full max-w-6xl mx-auto text-center space-y-8 ">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-light tracking-wide text-white">
            Numa
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            AI-powered legal assistant
          </p>
        </div>
        <div className="w-full max-w-2xl mx-auto">
          <SearchBox
            query={query}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={handleSubmit}
            className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-colors"
          >
            <span className="text-sm font-medium">Search</span>
          </button>

          <button
            onClick={handleResearch}
            className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-colors"
          >
            <span className="text-sm font-medium">Research</span>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          {isGettingResponse && (
            <div className="text-sm text-zinc-400 flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Thinking...</span>
            </div>
          )}
          {error && (
            <div className="text-sm text-red-500 flex items-center gap-2">
              <span>Error: {error.message}</span>
            </div>
          )}
          {isSuccess && (
            <div className="text-sm text-zinc-400 flex items-center gap-2">
              <span>{answer}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

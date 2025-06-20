"use client";

import type React from "react";
import { Search, Mic } from "lucide-react";

export function SearchBox({
  query,
  handleSubmit,
  handleChange,
}: {
  query: string;
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (value: string) => void;
}) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative w-full">
        <textarea
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything about Georgian financial law..."
          className="w-full bg-zinc-900/80 border border-zinc-700/50 rounded-2xl py-4 px-6 pr-16 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent text-base backdrop-blur-sm resize-none overflow-hidden min-h-[60px] max-h-[200px]"
          rows={1}
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-3">
          <button
            type="button"
            className="text-zinc-500 hover:text-zinc-300 transition-colors p-1"
            aria-label="Voice input"
          >
            <Mic size={20} />
          </button>
          <button
            type="submit"
            className="text-zinc-500 hover:text-zinc-300 transition-colors p-1"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
        </div>
      </div>
    </form>
  );
}

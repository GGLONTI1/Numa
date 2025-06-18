"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { Search, Mic } from "lucide-react";

export function SearchBox() {
  const [query, setQuery] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search query:", query);
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      const scrollHeight = textarea.scrollHeight;
      textarea.style.height = `${scrollHeight}px`;
    }
  }, [query]);

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
          ref={textareaRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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

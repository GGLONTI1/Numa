"use client";

import { SearchBox } from "@/components/search-box";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Car } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const data = [
  {
    title: "Financial Regulations Update",
    slug: "financial-regulations-update",

    description:
      "Recent changes to Georgia's financial regulations and compliance requirements",
  },
  {
    title: "Banking Law Amendments",
    slug: "banking-law-amendments",
    description:
      "New amendments to banking laws affecting commercial operations",
  },
  {
    title: "Tax Law Changes",
    slug: "tax-law-changes",
    description:
      "Important updates to tax legislation for financial institutions",
  },
  {
    title: "Corporate Governance",
    slug: "corporate-governance",
    description: "New corporate governance requirements for public companies",
  },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const results = data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(results);
    console.log("Search query:", query);
  };

  const handleChange = (value: string) => {
    if (value.trim() === "") {
      setFilteredData(data);
    }
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
            setQuery={setQuery}
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
        <div
          className={`flex flex-row flex-wrap  gap-2 ${
            filteredData.length > 2 ? "justify-center" : ""
          }`}
        >
          {filteredData.map((item, index) => (
            <Card className="w-full md:w-[250px]" key={index}>
              <CardHeader>
                <Link href={`/${item.slug}`} className="flex flex-col gap-2">
                  <CardTitle className="text-left min-h-[32px]">
                    {item.title}
                  </CardTitle>
                </Link>
                <CardDescription className="text-left">
                  {item.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

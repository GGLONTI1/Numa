import { SearchBox } from "@/components/search-box";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Car } from "lucide-react";

const data = [
  {
    title: "Financial Regulations Update",
    description:
      "Recent changes to Georgia's financial regulations and compliance requirements",
  },
  {
    title: "Banking Law Amendments",
    description:
      "New amendments to banking laws affecting commercial operations",
  },
  {
    title: "Tax Law Changes",
    description:
      "Important updates to tax legislation for financial institutions",
  },
  {
    title: "Corporate Governance",
    description: "New corporate governance requirements for public companies",
  },
];

export default function Home() {
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
          <SearchBox />
        </div>
        <div className="flex items-center justify-center gap-3">
          <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-colors">
            <span className="text-sm font-medium">Search</span>
          </button>
          <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-colors">
            <span className="text-sm font-medium">Research</span>
          </button>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-2">
          {data.map((item, index) => (
            <Card className="w-full md:w-[250px]" key={index}>
              <CardHeader>
                <CardTitle className="text-left min-h-[32px]">
                  {item.title}
                </CardTitle>
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

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

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

const LawPage = () => {
  return (
    <div className="p-4 h-full flex items-center justify-center flex-col gap-8">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="text-2xl font-bold">Laws</h1>
        <p className="text-sm text-muted-foreground">
          Here you can find all the laws and regulations that are relevant to
          your business.
        </p>
      </div>
      <div
        className={`flex flex-row flex-wrap  gap-2 ${
          data.length > 2 ? "justify-center" : ""
        }`}
      >
        {data.map((item, index) => (
          <Card
            className="w-full md:w-[250px] border rounded-lg transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(0,0,139,0.8)]"
            key={index}
          >
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
  );
};

export default LawPage;

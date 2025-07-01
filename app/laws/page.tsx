"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useDeleteLaw, useGetAllLaws } from "@/lib/query/queries";
import { Delete, DeleteIcon, LucideDelete, Trash } from "lucide-react";
import Link from "next/link";
import React from "react";

const LawPage = () => {
  const { data: allLaws, isPending: isGettingAllLaws } = useGetAllLaws();
  const { mutateAsync: deleteLaw, isPending: isDeletingLaw } = useDeleteLaw();

  async function handleDelete(id: string) {
    console.log("Clicked", id);
    await deleteLaw(id);
  }

  if (isDeletingLaw)
    return (
      <div className="w-full h-full flex items-center justify-center">
        Loading...
      </div>
    );

  return (
    <div className="flex items-center justify-center flex-col gap-8">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="text-2xl font-bold">Laws</h1>
        <p className="text-sm text-muted-foreground">
          Here you can find all the laws and regulations that are relevant to
          your business.
        </p>
      </div>
      <div
        className={`flex flex-row flex-wrap gap-2 ${
          (allLaws?.length ?? 0) > 2 ? "justify-center" : ""
        }`}
      >
        {allLaws?.map((item, index) => (
          <Card
            className="w-full md:w-[250px] border rounded-lg transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(0,0,139,0.8)]"
            key={index}
          >
            <CardHeader>
              <Link href={`/${item.slug}`} className="flex flex-col gap-2">
                <CardTitle className="text-left min-h-[32px]">
                  {item.newTitle}
                </CardTitle>
              </Link>
              <CardDescription className="text-left">
                {item.description.slice(0, 200)} {"..."}
              </CardDescription>
              <div className="flex justify-end ">
                <Trash
                  onClick={() => handleDelete(item.$id)}
                  className="cursor-pointer"
                />
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LawPage;

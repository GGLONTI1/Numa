"use client";

import { useGetLawBySlug } from "@/lib/query/queries";
import { usePathname } from "next/navigation";

const SinglePostPage = () => {
  const pathName = usePathname();
  const slug = pathName.split("/").pop() || "";

  const { data: law, isPending: isGettingLaw } = useGetLawBySlug(slug);

  console.log(law);

  return <div>Hello World!</div>;
};

export default SinglePostPage;

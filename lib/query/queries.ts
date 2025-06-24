import { useQuery } from "@tanstack/react-query";
import { getUser } from "../appwrite/auth";

export const useGetUser = () => {
  return useQuery({
    queryKey: ["useGetUser"],
    queryFn: getUser,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchInterval: false,
  });
};

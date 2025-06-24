import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../appwrite/auth";

export const useGetUser = () => {
  return useQuery({
    queryKey: ["useGetUser"],
    queryFn: getCurrentUser,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchInterval: false,
  });
};

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCurrentUser, logIn, logOut } from "../appwrite/auth";
import { createLaw } from "../appwrite/laws";
import { LawDataType } from "@/typings";

export const useGetUser = () => {
  return useQuery({
    queryKey: ["useGetUser"],
    queryFn: getCurrentUser,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchInterval: false,
  });
};

export const useSignIn = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      logIn(email, password),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["useGetUser"] });
    },
  });
};

export const useSignOut = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => logOut(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["useGetUser"] });
    },
  });
};

export const useCreateLaw = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (lawData: LawDataType) => createLaw(lawData),
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ["useGetUser"] });
    },
  });
};

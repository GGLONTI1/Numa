import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCurrentUser, logIn, logOut } from "../appwrite/auth";
import {
  createLaw,
  deleteLaw,
  editLaw,
  getAllLaws,
  getLawBySlug,
} from "../appwrite/laws";
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
      console.log("created succesfully");
    },
  });
};
export const useGetAllLaws = () => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["getAllLaws"],
    queryFn: getAllLaws,
  });
};

export const useDeleteLaw = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteLaw(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAllLaws"] });
      console.log("Deleted succesfully");
    },
  });
};

export const useGetLawBySlug = (slug: string) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["getLawsBySlug", slug],
    queryFn: () => getLawBySlug(slug),
    enabled: !!slug,
  });
};

export const useEditLaw = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      lawData,
    }: {
      id: string;
      lawData: Partial<LawDataType>;
    }) => editLaw(id, lawData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAllLaws"] });
      console.log("Edited successfully");
    },
  });
};

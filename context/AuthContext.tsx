"use client";

import { useGetUser } from "@/lib/query/queries";
import { createContext, useEffect, useState } from "react";
import { AuthState } from "@/typings";

export const defaultUser = {
  userId: "",
  fullName: "",
  email: "",
};

export const AuthContext = createContext<AuthState>({
  user: defaultUser,
  setUser: () => {},
  isGettingUser: true,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(defaultUser);
  const { data: userData, isPending: isGettingUser } = useGetUser();

  useEffect(() => {
    setUser({
      userId: userData?.$id || "",
      fullName: userData?.name || "",
      email: userData?.email || "",
    });
  }, [userData]);

  return (
    <AuthContext.Provider value={{ user, setUser, isGettingUser }}>
      {children}
    </AuthContext.Provider>
  );
}

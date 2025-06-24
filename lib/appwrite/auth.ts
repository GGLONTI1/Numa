"use client";

import { userDataType } from "@/typings";
import { Client, Account, Databases, ID } from "appwrite";
export { ID } from "appwrite";

export const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

export const account = new Account(client);
export const database = new Databases(client);

export async function logIn(email: string, password: string) {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error: any) {
    console.error("Login failed:", error.message);
    throw new Error(error.message || "Login failed");
  }
}

export async function register(
  email: string,
  password: string,
  fullName: string
) {
  try {
    const user = await account.create(ID.unique(), email, password, fullName);
    console.log("Registration successful:", user);
    const session = await logIn(email, password);
    const userData: userDataType = {
      fullName,
      email,
    };
    const newUser = await saveUserToDb(userData, user.$id);
    return newUser;
  } catch (error: any) {
    console.error("Registration failed:", error.message);
    throw new Error(error.message || "User registration failed");
  }
}

export async function saveUserToDb(userData: userDataType, userId: string) {
  const { fullName, email } = userData;
  try {
    const newUser = await database.createDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_USER_COLLECTION!,
      ID.unique(),
      {
        userId,
        fullName,
        email,
      }
    );
    return newUser;
  } catch (error) {
    console.log(error);
  }
}

export async function logOut() {
  try {
    await account.deleteSession("current");
  } catch (error: any) {
    console.error("Logout failed:", error.message);
    throw new Error(error.message || "Logout failed");
  }
}

export async function getCurrentUser() {
  try {
    const user = await account.get();
    console.log("Current user:", user);
    return user;
  } catch (error: any) {
    console.error("Failed to fetch current user:", error.message);
    return null;
  }
}

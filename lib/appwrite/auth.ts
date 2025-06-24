"use client";

import { Client, Account, Databases, ID } from "appwrite";
export { ID } from "appwrite";

export const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("68552aed001ba922bd39");
  
export const account = new Account(client);
export const database = new Databases(client);

export async function logIn(email: string, password: string) {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    console.log("Login successful:", session);
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
    await logIn(email, password);
    return user;
  } catch (error: any) {
    console.error("Registration failed:", error.message);
    throw new Error(error.message || "User registration failed");
  }
}

export async function logOut() {
  try {
    await account.deleteSession("current");
    console.log("Logged out successfully");
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

import { userDataType } from "@/typings";
import { account, database } from "./appwrite";
import { ID } from "appwrite";

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
    const databaseId = process.env.DATABASE_ID || "685a532e001a190640a0";
    const collectionId = process.env.USER_COLLECTION || "685a533f00012359825d";

    const newUser = await database.createDocument(
      databaseId,
      collectionId,
      ID.unique(),
      { userId, fullName, email }
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
    return user;
  } catch (error: any) {
    // console.error("Failed to fetch current user:", error.message);
    return null;
  }
}

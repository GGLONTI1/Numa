import { ID } from "appwrite";
import { database } from "./appwrite";
import { LawDataType } from "@/typings";

const LAWS_COLLECTION_ID = "685acdff002a6861fa3a";
const DATABASE_ID = "685a532e001a190640a0";

export async function createLaw(lawData: LawDataType) {
  const { title, description } = lawData;
  try {
    await database.createDocument(
      DATABASE_ID,
      LAWS_COLLECTION_ID,
      ID.unique(),
      { newTitle: title, description }
    );

    return { sucess: true };
  } catch (error) {
    console.error("failed to create law", error);
  }
}

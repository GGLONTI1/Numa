import { ID, Query } from "appwrite";
import { database } from "./appwrite";
import { LawDataType } from "@/typings";


const LAWS_COLLECTION_ID = "685acdff002a6861fa3a";
const DATABASE_ID = "685a532e001a190640a0";

export async function createLaw(lawData: LawDataType) {
  try {
    await database.createDocument(
      DATABASE_ID,
      LAWS_COLLECTION_ID,
      ID.unique(),
      lawData
    );
  } catch (error) {
    console.error("failed to create law"), error;
  }
}

export async function getAllLaws() {
  try {
    const { documents, total } = await database.listDocuments(
      DATABASE_ID,
      LAWS_COLLECTION_ID,
      [Query.orderDesc("$createdAt")]
    );
    return documents;
  } catch (error) {
    console.error("failed to get data", error);
  }
}

export async function deleteLaw(id: string) {
  try {
    await database.deleteDocument(DATABASE_ID, LAWS_COLLECTION_ID, id);
  } catch (error) {
    console.error("failed to delete law", error);
  }
}

export async function getLawBySlug(slug: string) {
  try {
    const { documents, total } = await database.listDocuments(
      DATABASE_ID,
      LAWS_COLLECTION_ID,
      [Query.equal("slug", slug)]
    );
    return documents;
  } catch (error) {
    console.error("Error getting slug");
  }
}

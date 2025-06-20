import { Client, Account } from "appwrite";
export { ID } from "appwrite";

export const client = new Client();
export const account = new Account(client);

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("68552aed001ba922bd39");

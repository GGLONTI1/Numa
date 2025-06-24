import { Client, Account, Databases } from "appwrite";

const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("685a530e002fe679822f");

export const account = new Account(client);
export const database = new Databases(client);

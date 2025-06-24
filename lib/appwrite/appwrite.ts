"use client";

import { Client, Account, Databases } from "appwrite";

export const client = new Client();
export const account = new Account(client);
export const database = new Databases(client);

export async function createSessionClient() {
  const client = new Client()
    .setEndpoint("https://fra.cloud.appwrite.io/v1")
    .setProject("68552aed001ba922bd39");

  return {
    account,
    client,
  };
}

export default { account, client, database };

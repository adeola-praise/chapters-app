import { Client, Databases, Account, Storage } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("671cd67e003c61dd84d8");

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client)
// const a = import.meta.env.VITE_APP_APPWRITE_KEY

// console.log(a)
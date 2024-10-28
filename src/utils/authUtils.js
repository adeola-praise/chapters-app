import { account } from "./appwrite";

export const isAdmin = async () => {
  try {
    const user = await account.get();
    return user.prefs.role === "admin";
  } catch (error) {
    console.error("Failed to check admin status:", error);
    return false;
  }
};

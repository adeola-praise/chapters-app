import { account } from "./appwrite";

// Signup as User
export const signupUser = async (email, password, name) => {
    try {
        const response = await account.create('unique()', email, password, name);
        await account.updatePrefs({role: 'user'});
        return response;
    } catch (error) {
        console.error('User Signup Error:', error)
    }
}

// Signup as Admin
export const signupAdmin = async (email, password, name) => {
    try {
        const response = await account.create("unique()", email, password, name);
        await account.updatePrefs({role: 'user'});
    } catch (error) {
        console.error('User Signup Error:', error)
    }
}

// Login function
export const login = async (email, password) => {
    try {
        const response = await account.createEmailPasswordSession(email, password);
    } catch (error) {
        console.error("Login Error:", error);
    }
}
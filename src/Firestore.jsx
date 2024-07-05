import { db } from "./Firebase";
import { doc, setDoc } from "firebase/firestore";

export const saveUserData = async (userId, data) => {
  try {
    await setDoc(doc(db, "users", userId), data);
  } catch (error) {
    console.error("Error saving user data:", error);
    throw error;
  }
};
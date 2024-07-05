import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCxkTzhQ8XTwwCC7YAFvdDRGNKysKTZ4GA",
    authDomain: "ebay-7fe7e.firebaseapp.com",
    projectId: "ebay-7fe7e",
    storageBucket: "ebay-7fe7e.appspot.com",
    messagingSenderId: "936002054682",
    appId: "1:936002054682:web:98010951ad271fdf95ffa3"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
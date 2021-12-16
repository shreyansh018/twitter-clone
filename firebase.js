import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCl_Ct5422mR7bo6I4MO6nEeFZURMOOcmU",
  authDomain: "twitter-clone-f5111.firebaseapp.com",
  projectId: "twitter-clone-f5111",
  storageBucket: "twitter-clone-f5111.appspot.com",
  messagingSenderId: "644324611133",
  appId: "1:644324611133:web:a8008b63ff9313f6fb0654",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };

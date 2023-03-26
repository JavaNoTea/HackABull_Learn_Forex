// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "hack-a-bu.firebaseapp.com",
  projectId: "hack-a-bu",
  storageBucket: "hack-a-bu.appspot.com",
  messagingSenderId: "32330794376",
  appId: "1:32330794376:web:36084d2e2f13a3dc23e63d",
  measurementId: "G-FG518Q8B48"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore();
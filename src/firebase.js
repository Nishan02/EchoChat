import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSqFC70Vq045DPQTrE88H6OgSTNupDYxE",
  authDomain: "echochat-b84ec.firebaseapp.com",
  projectId: "echochat-b84ec",
  storageBucket: "echochat-b84ec.firebasestorage.app",
  messagingSenderId: "105950440425",
  appId: "1:105950440425:web:4b65f6e5a752c92780b978",
  measurementId: "G-PECVCT7Q2R"
};

// Initialize Firebase;
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

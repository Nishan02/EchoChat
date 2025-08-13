import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpWnQVliUwLFZiJMa2chRw70fiaVo-cA4",
  authDomain: "echochat-e793e.firebaseapp.com",
  projectId: "echochat-e793e",
  storageBucket: "echochat-e793e.firebasestorage.app",
  messagingSenderId: "704291585059",
  appId: "1:704291585059:web:05f126e245e6ec494a0596",
  measurementId: "G-V9FCKZGV9Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

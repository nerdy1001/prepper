// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlKmncoCVUFpZFMNt6JbnUK2SMojihDk0",
  authDomain: "prepper-703fd.firebaseapp.com",
  projectId: "prepper-703fd",
  storageBucket: "prepper-703fd.firebasestorage.app",
  messagingSenderId: "1084229535196",
  appId: "1:1084229535196:web:828bf2916769d762e9bb19",
  measurementId: "G-7PDS8EG3VK"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
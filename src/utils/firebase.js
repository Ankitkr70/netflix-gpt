// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB_fqTIubCtnPccoxpuJ_z4BwxKA6ec6ls",
  authDomain: "netflixgpt-8b35a.firebaseapp.com",
  projectId: "netflixgpt-8b35a",
  storageBucket: "netflixgpt-8b35a.appspot.com",
  messagingSenderId: "958425056013",
  appId: "1:958425056013:web:c9e741fb4119d17bd86644",
  measurementId: "G-W7Z69XHYB0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

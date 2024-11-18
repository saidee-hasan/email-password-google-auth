// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNEPGNdRUSMswhHqnnrrzeYOGdJbyd7Gw",
  authDomain: "email-password-35c25.firebaseapp.com",
  projectId: "email-password-35c25",
  storageBucket: "email-password-35c25.firebasestorage.app",
  messagingSenderId: "87676339076",
  appId: "1:87676339076:web:6194d53a3e5da657e113d1",
  measurementId: "G-DZM6W6H62S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
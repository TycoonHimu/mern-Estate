// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3eba8.firebaseapp.com",
  projectId: "mern-estate-3eba8",
  storageBucket: "mern-estate-3eba8.appspot.com",
  messagingSenderId: "215631420701",
  appId: "1:215631420701:web:044bd9459b327a796d15f4",
  measurementId: "G-PBY5466XKK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
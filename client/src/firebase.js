// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2b0f0.firebaseapp.com",
  projectId: "mern-estate-2b0f0",
  storageBucket: "mern-estate-2b0f0.appspot.com",
  messagingSenderId: "341188861663",
  appId: "1:341188861663:web:348f32fe540ff96512536a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
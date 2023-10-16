// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-9f094.firebaseapp.com",
  projectId: "mern-estate-9f094",
  storageBucket: "mern-estate-9f094.appspot.com",
  messagingSenderId: "203752627340",
  appId: "1:203752627340:web:53000ae2fc81c3981a6fa9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

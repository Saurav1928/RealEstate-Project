// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-96053.firebaseapp.com",
  projectId: "mern-estate-96053",
  storageBucket: "mern-estate-96053.appspot.com",
  messagingSenderId: "173468735836",
  appId: "1:173468735836:web:2d29f18b4fe47c6da34999",
  measurementId: "G-W7NYYQCKF5",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

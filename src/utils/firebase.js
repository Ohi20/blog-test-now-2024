// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "my-blog-2024-5bfde.firebaseapp.com",
  projectId: "my-blog-2024-5bfde",
  storageBucket: "my-blog-2024-5bfde.appspot.com",
  messagingSenderId: "655762426619",
  appId: "1:655762426619:web:f24a912fb1b8f7b1a3be5e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

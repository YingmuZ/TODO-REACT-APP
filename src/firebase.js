// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyhtY1gxJDfKiMD7EufhY5-x3LR1BiGHw",
  authDomain: "todo-app-c2356.firebaseapp.com",
  projectId: "todo-app-c2356",
  storageBucket: "todo-app-c2356.appspot.com",
  messagingSenderId: "655671451471",
  appId: "1:655671451471:web:455f343819f915bcedef3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
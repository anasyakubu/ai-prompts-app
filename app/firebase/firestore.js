// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAz55oR3TaglivCj7Cz_QEmOF9-Yhn0mc",
  authDomain: "ai-prompt-d6963.firebaseapp.com",
  projectId: "ai-prompt-d6963",
  storageBucket: "ai-prompt-d6963.appspot.com",
  messagingSenderId: "983206975804",
  appId: "1:983206975804:web:9eefecdce2f085f9616639",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

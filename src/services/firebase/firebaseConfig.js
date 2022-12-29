// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQM52vMCWQFmRmlDJLRJ-LF0MBxf4bu_c",
  authDomain: "cursoreactjs-c1926.firebaseapp.com",
  projectId: "cursoreactjs-c1926",
  storageBucket: "cursoreactjs-c1926.appspot.com",
  messagingSenderId: "1008437647869",
  appId: "1:1008437647869:web:181ba9103e9b1b0317e194"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
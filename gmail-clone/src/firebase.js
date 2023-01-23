import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-Z6UltJ6b8inwEp2_tBeW13t2pnLg7Pw",
  authDomain: "email-service-faeba.firebaseapp.com",
  projectId: "email-service-faeba",
  storageBucket: "email-service-faeba.appspot.com",
  messagingSenderId: "1027122524441",
  appId: "1:1027122524441:web:7d01737424a02b83471588",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { db, auth, provider };

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA-Z6UltJ6b8inwEp2_tBeW13t2pnLg7Pw",
  authDomain: "email-service-faeba.firebaseapp.com",
  projectId: "email-service-faeba",
  storageBucket: "email-service-faeba.appspot.com",
  messagingSenderId: "1027122524441",
  appId: "1:1027122524441:web:7d01737424a02b83471588",
};

const firebaseApp = firebase.initialize(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

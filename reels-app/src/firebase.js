import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxVqi9h2Lb3VYC0zhBgGZob3BOYHlvbek",
  authDomain: "reelsclone-f75aa.firebaseapp.com",
  projectId: "reelsclone-f75aa",
  storageBucket: "reelsclone-f75aa.appspot.com",
  messagingSenderId: "691675258132",
  appId: "1:691675258132:web:aa309237e58d50cd9cb601",
  measurementId: "G-8G5M7KXFX7",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();

export const database = {
  users: firestore.collection("users"),
};

export const storage = firebase.storage();

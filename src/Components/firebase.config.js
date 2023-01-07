import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAILgkBwrKGxImFvpJctlPg9BuVwwdWRDE",
  authDomain: "ez-assignment.firebaseapp.com",
  projectId: "ez-assignment",
  storageBucket: "ez-assignment.appspot.com",
  messagingSenderId: "840652869803",
  appId: "1:840652869803:web:9b54d831abc779cbbce7ee",
  measurementId: "G-WW209DLGD8"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export { app, firestore };

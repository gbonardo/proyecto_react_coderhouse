import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_FIREBASE_API_KEY,
  authDomain: "infotech-4d72f.firebaseapp.com",
  projectId: "infotech-4d72f",
  storageBucket: "infotech-4d72f.appspot.com",
  messagingSenderId: "701751264043",
  appId: "1:701751264043:web:c13c4882072f2f384c3b6e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
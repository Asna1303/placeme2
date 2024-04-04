
import { initializeApp } from "firebase/app";

import {getAuth} from  "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-a42Vy_9dnaHH3cwGj3CVpeVnhs8DRJc",
  authDomain: "chat2-4f812.firebaseapp.com",
  projectId: "chat2-4f812",
  storageBucket: "chat2-4f812.appspot.com",
  messagingSenderId: "453369244091",
  appId: "1:453369244091:web:b6fed0d623cfece0b53c9e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
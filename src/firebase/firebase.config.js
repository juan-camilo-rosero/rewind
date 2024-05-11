import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApiKey = import.meta.env.VITE_FIREBASE_API_KEY

const firebaseConfig = {
    apiKey: firebaseApiKey,
  
    authDomain: "rewind-801e6.firebaseapp.com",
  
    projectId: "rewind-801e6",
  
    storageBucket: "rewind-801e6.appspot.com",
  
    messagingSenderId: "364025843450",
  
    appId: "1:364025843450:web:0f2499b5ac127bbb4a8343"  
  };
  


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);

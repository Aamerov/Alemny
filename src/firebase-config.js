// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdPiE5nXC75kYWz6YeiR3J7myyBYvJbV0",
  authDomain: "alaminilms.firebaseapp.com",
  projectId: "alaminilms",
  storageBucket: "alaminilms.appspot.com",
  messagingSenderId: "978761769261",
  appId: "1:978761769261:web:a3ab770d6bd23ba1e2f3a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);

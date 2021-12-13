import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCLrQskg1f6wLhsCiyNyAFGSVuOpd92fk",
  authDomain: "tiendanerd-63cc7.firebaseapp.com",
  projectId: "tiendanerd-63cc7",
  storageBucket: "tiendanerd-63cc7.appspot.com",
  messagingSenderId: "424655120925",
  appId: "1:424655120925:web:92a6e1caa23ab8a80ef4f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtpkx06IVexONDokicbdwjcWhHfpfAdJ8",
  authDomain: "rossgames-680e9.firebaseapp.com",
  projectId: "rossgames-680e9",
  storageBucket: "rossgames-680e9.firebasestorage.app",
  messagingSenderId: "31576963591",
  appId: "1:31576963591:web:ff53dee6a8303b999e08a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
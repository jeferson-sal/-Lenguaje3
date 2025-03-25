// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD37DnATkMd5zWG0j2R9TMI_xNHCKqjzok",
  authDomain: "nuestra-pagina-wed.firebaseapp.com",
  projectId: "nuestra-pagina-wed",
  storageBucket: "nuestra-pagina-wed.firebasestorage.app",
  messagingSenderId: "338914010271",
  appId: "1:338914010271:web:8d6fffc2ba2fb367d8aeaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

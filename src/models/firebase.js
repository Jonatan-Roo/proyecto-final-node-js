// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: "entregafinal-nodejs.firebasestorage.app",
    messagingSenderId: "251190649484",
    appId: "1:251190649484:web:a747f73f7b302ae8fb51a9"
};

// Iniciar Firebase
const app = initializeApp(firebaseConfig);


//Iniciar Firestore
export const db = getFirestore(app);
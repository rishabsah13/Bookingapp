import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCNDLRIpqqhahabNLS14C6JWSDRlw3r4Zs",
    authDomain: "booking-7a9ee.firebaseapp.com",
    projectId: "booking-7a9ee",
    storageBucket: "booking-7a9ee.appspot.com",
    messagingSenderId: "787245914485",
    appId: "1:787245914485:web:c1b63e8830062ace651b3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
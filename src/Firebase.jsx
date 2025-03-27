import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyACXGsa0dVzqGVwMC-yZgg0iInRIjB3b7s",
    authDomain: "clone-522b3.firebaseapp.com",
    projectId: "clone-522b3",
    storageBucket: "clone-522b3.firebasestorage.app",
    messagingSenderId: "820187169992",
    appId: "1:820187169992:web:4b7a92969762da982f51fd",
    measurementId: "G-6JYSSPQDM2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
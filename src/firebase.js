// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG8LCKqOA1OvB15fpAzg8-JaBkdhGn_2c",
  authDomain: "ai-support-app-3c0d7.firebaseapp.com",
  projectId: "ai-support-app-3c0d7",
  storageBucket: "ai-support-app-3c0d7.appspot.com",
  messagingSenderId: "813407213860",
  appId: "1:813407213860:web:65748668acc53aec5f7bb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };

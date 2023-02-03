// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MESAUREMENT_ID,
};

// Initialize Firebase
const app = initializeFirebaseApp(firebaseConfig);

function initializeFirebaseApp(config) {
  try {
    if (getApps().length === 0) {
      return initializeApp(config);
    }
    return getApp();
  } catch (err) {
    console.log(err);
  }
}

const db = getFirestore(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { app, db, auth, provider, initializeFirebaseApp };
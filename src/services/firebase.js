import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyANO3s0o3yiNSg5BjoGYgnEdP7sS4lBTTY",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "portfolio-7a8f2.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "portfolio-7a8f2",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "portfolio-7a8f2.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "929666085421",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:929666085421:web:70d5f3215182e22a4b7ea4",
};

export const isFirebaseConfigured = () =>
  Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);

let app = null;
let auth = null;
let db = null;
let storage = null;

if (isFirebaseConfigured()) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);
}

export { app, auth, db, storage };

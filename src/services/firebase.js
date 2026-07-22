import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDagqJtp7AnGBh0xyky4SvAME-8ZS7PeaQ",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "obsidianide-1606f.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "obsidianide-1606f",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "obsidianide-1606f.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "760717239168",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:760717239168:web:ec973488753109c8a0d765",
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

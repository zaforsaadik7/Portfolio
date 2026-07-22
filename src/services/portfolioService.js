import {
  doc,
  getDoc,
  setDoc,
  onSnapshot,
} from 'firebase/firestore';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { auth, db, storage, isFirebaseConfigured } from './firebase';
import { INITIAL_DATA } from '../data/initialData';
import {
  getStoredData,
  saveStoredData,
  getAdminAuth,
  setAdminAuth,
  readFileAsDataURL,
} from './storage';

const PORTFOLIO_COLLECTION = 'portfolio';
const PORTFOLIO_DOC_ID = 'main';

const getFallbackAdminCredentials = () => ({
  email: import.meta.env.VITE_ADMIN_EMAIL || 'sayhitosaadik@gmail.com',
  password: import.meta.env.VITE_ADMIN_PASSWORD || 'Yscc9j0hpcS6DJ',
});

export const signInAdmin = async (email, password) => {
  const { email: adminEmail, password: adminPassword } = getFallbackAdminCredentials();

  if (isFirebaseConfigured()) {
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      setAdminAuth(true);
      return;
    } catch (err) {
      if (password === adminPassword) {
        setAdminAuth(true);
        return;
      }
      throw new Error('Invalid email or password.');
    }
  }

  if (password === adminPassword) {
    setAdminAuth(true);
    return;
  }

  throw new Error('Invalid email or password.');
};

export const signOutAdmin = async () => {
  if (isFirebaseConfigured() && auth?.currentUser) {
    await signOut(auth);
  }
  setAdminAuth(false);
};

export const subscribeToAuth = (callback) => {
  if (isFirebaseConfigured()) {
    return onAuthStateChanged(auth, (user) => {
      const isLoggedIn = Boolean(user);
      setAdminAuth(isLoggedIn);
      callback(isLoggedIn);
    });
  }

  callback(getAdminAuth());
  return () => {};
};

export const loadPortfolioData = async () => {
  if (isFirebaseConfigured()) {
    const snapshot = await getDoc(doc(db, PORTFOLIO_COLLECTION, PORTFOLIO_DOC_ID));
    if (snapshot.exists()) {
      const remote = snapshot.data();
      saveStoredData(remote);
      return remote;
    }

    await setDoc(doc(db, PORTFOLIO_COLLECTION, PORTFOLIO_DOC_ID), INITIAL_DATA);
    saveStoredData(INITIAL_DATA);
    return INITIAL_DATA;
  }

  return getStoredData();
};

export const subscribeToPortfolio = (callback) => {
  if (isFirebaseConfigured()) {
    return onSnapshot(
      doc(db, PORTFOLIO_COLLECTION, PORTFOLIO_DOC_ID),
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data();
          saveStoredData(data);
          callback(data);
        } else {
          const stored = getStoredData();
          setDoc(doc(db, PORTFOLIO_COLLECTION, PORTFOLIO_DOC_ID), stored, { merge: true });
          callback(stored);
        }
      },
      (error) => {
        console.error('Firestore subscription error:', error);
        callback(getStoredData());
      }
    );
  }

  callback(getStoredData());
  return () => {};
};

export const persistPortfolioData = async (data) => {
  saveStoredData(data);

  if (isFirebaseConfigured()) {
    await setDoc(doc(db, PORTFOLIO_COLLECTION, PORTFOLIO_DOC_ID), data, { merge: true });
  }
};

export const uploadPortfolioFile = async (file, storagePath) => {
  if (isFirebaseConfigured()) {
    const fileRef = ref(storage, storagePath);
    await uploadBytes(fileRef, file);
    return getDownloadURL(fileRef);
  }

  return readFileAsDataURL(file);
};

export { isFirebaseConfigured };

import { INITIAL_DATA } from '../data/initialData';

const STORAGE_KEY = 'portfolio_data_v1';
const AUTH_KEY = 'portfolio_admin_auth';

// Load portfolio data from localStorage or initialData
export const getStoredData = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error("Failed to read from localStorage:", e);
  }
  return INITIAL_DATA;
};

// Save portfolio data to localStorage
export const saveStoredData = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error("Failed to save to localStorage:", e);
  }
};

// Check local auth state
export const getAdminAuth = () => {
  try {
    return localStorage.getItem(AUTH_KEY) === 'true';
  } catch (e) {
    return false;
  }
};

// Set local auth state
export const setAdminAuth = (isLoggedIn) => {
  try {
    if (isLoggedIn) {
      localStorage.setItem(AUTH_KEY, 'true');
    } else {
      localStorage.removeItem(AUTH_KEY);
    }
  } catch (e) {
    console.error("Failed to set auth state:", e);
  }
};

// Helper to convert uploaded files to base64 data URL for instant display & offline storage
export const readFileAsDataURL = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};

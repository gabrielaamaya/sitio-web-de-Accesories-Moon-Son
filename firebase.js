// ==============================
// IMPORTAR FIREBASE DESDE CDN
// ==============================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";

// ===== IMPORTAR AUTH =====
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// ===== IMPORTAR FIRESTORE =====
import { 
  getFirestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ==============================
// CONFIGURACIÓN DE TU PROYECTO
// ==============================
const firebaseConfig = {
  apiKey: "AIzaSyAC2DbDx6d7l2BjBbYYc4FMHNmTyLKBNFg",
  authDomain: "moon-y-sun.firebaseapp.com",
  projectId: "moon-y-sun",
  storageBucket: "moon-y-sun.firebasestorage.app",
  messagingSenderId: "329917931112",
  appId: "1:329917931112:web:6356c2e8de55ab74a865dd",
  measurementId: "G-3HVT6M2H8P"
};

// ==============================
// INICIALIZAR FIREBASE
// ==============================
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// ==============================
// INICIALIZAR AUTH (LOGIN GOOGLE)
// ==============================
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// ==============================
// INICIALIZAR FIRESTORE
// ==============================
export const db = getFirestore(app);

// EXPORTAR TODO PARA app.js
export {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
};

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAC2DbDx6d7l2BjBbYYc4FMHNmTyLKBNFg",
  authDomain: "moon-y-sun.firebaseapp.com",
  projectId: "moon-y-sun",
  storageBucket: "moon-y-sun.firebasestorage.app",
  messagingSenderId: "329917931112",
  appId: "1:329917931112:web:6356c2e8de55ab74a865dd",
  measurementId: "G-3HVT6M2H8P"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Función para iniciar sesión con Google
function signInWithGoogle() {

  const provider = new GoogleAuthProvider();

  // 🔥 FORZAR GOOGLE A ELEGIR CUENTA SIEMPRE
  provider.setCustomParameters({
    prompt: "select_account"
  });

  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;

      console.log('✅ Usuario autenticado con Google:', user);

      // Redirigir a inicio
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error("❌ Error al iniciar sesión con Google: ", error.message);
      alert("Error al iniciar sesión con Google: " + error.message);
    });
}

// Asignar evento al botón de Google
document.getElementById("btn-google").addEventListener("click", signInWithGoogle);

console.log('Autenticación con Google habilitada.');

// ======================================================
// 🔥 MOSTRAR EL NOMBRE DEL USUARIO EN INDEX.HTML
// ======================================================
onAuthStateChanged(auth, (user) => {
  if (user) {
    const name = user.displayName;

    const nameElement = document.getElementById("nombre-usuario");

    if (nameElement) {
      nameElement.textContent = `Hola, ${name.split(" ")[0]}`;
    }
  }
});

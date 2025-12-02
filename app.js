import {
  auth,
  provider,
  signInWithPopup,
  signOut
} from "./firebase.js";

// ELEMENTOS
const btnGoogle = document.getElementById("btnGoogle");
const btnLogout = document.getElementById("btnLogout");

const userInfo = document.getElementById("userInfo");
const userPhoto = document.getElementById("userPhoto");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

// LOGIN GOOGLE
btnGoogle.addEventListener("click", async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    userInfo.style.display = "block";

    userPhoto.src = user.photoURL;
    userName.textContent = user.displayName;
    userEmail.textContent = user.email;

    console.log("Usuario logueado:", user);

  } catch (error) {
    console.error("Error al iniciar sesión:", error);
  }
});

// LOGOUT
btnLogout.addEventListener("click", async () => {
  try {
    await signOut(auth);
    userInfo.style.display = "none";
    alert("Cerraste sesión");
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
});






//no hay conexion todavia 




import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebaseConfig.js";

const loginBtn = document.getElementById("loginGoogle");

loginBtn.addEventListener("click", () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            // Usuario autenticado correctamente
            window.location.href = "inicio.html";  // 👉 Redirección a tu página
        })
        .catch((error) => {
            console.error("Error al iniciar sesión:", error);
        });
});

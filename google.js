// ==========================================================
// =========== MODAL GOOGLE (ABRIR / CERRAR) ================
// ==========================================================

const modalGoogle = document.getElementById("google-modal");
const btnGoogle = document.getElementById("btn-google");
const closeGoogle = document.querySelector(".close");

// Abrir modal Google
btnGoogle.addEventListener("click", () => {
  modalGoogle.style.display = "flex";
});

// Cerrar modal Google (X)
closeGoogle.addEventListener("click", () => {
  modalGoogle.style.display = "none";
});

// Cerrar Google modal si clic fuera
window.addEventListener("click", (e) => {
  if (e.target === modalGoogle) {
    modalGoogle.style.display = "none";
  }
});


// ==========================================================
// ======= ABRIR MODAL OTP DESDE OPCIONES DE CUENTA =========
// ==========================================================

// Elementos
const accountOption = document.querySelector(".account-option"); // cuenta guardada
const useOtherAccount = document.getElementById("btn-use-account"); // botón "Usar otra cuenta"
const secondModal = document.getElementById("second-modal");
const closeSecond = document.querySelector(".close-second");

// Abrir OTP al hacer clic en cuenta guardada
accountOption.addEventListener("click", () => {
  modalGoogle.style.display = "none";
  secondModal.style.display = "flex";
});

// Abrir OTP al hacer clic en "Usar otra cuenta" (corregido)
useOtherAccount.addEventListener("click", () => {
  modalGoogle.style.display = "none";
  secondModal.style.display = "flex";
});

// Cerrar modal OTP (X)
closeSecond.addEventListener("click", () => {
  secondModal.style.display = "none";
});

// Cerrar OTP modal si clic fuera
window.addEventListener("click", (e) => {
  if (e.target === secondModal) {
    secondModal.style.display = "none";
  }
});





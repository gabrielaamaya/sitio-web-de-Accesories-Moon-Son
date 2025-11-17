const modalGoogle = document.getElementById("google-modal");
const btnGoogle = document.getElementById("btn-google");
const closeGoogle = document.querySelector(".close");

// Abrir modal
btnGoogle.addEventListener("click", () => {
  modalGoogle.style.display = "flex";
});

// Cerrar modal (X)
closeGoogle.addEventListener("click", () => {
  modalGoogle.style.display = "none";
});

// Cerrar al hacer clic fuera
window.addEventListener("click", (e) => {
  if (e.target === modalGoogle) {
    modalGoogle.style.display = "none";
  }
});

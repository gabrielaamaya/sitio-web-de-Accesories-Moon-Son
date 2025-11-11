
// ===== ojo en contraseña login =====
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('login-password');

togglePassword.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash'); // cambia el ícono
});


// ===== Mostrar/Ocultar contraseña en Registro =====
const toggleRegisterPassword = document.getElementById('toggleRegisterPassword');
const registerPasswordInput = document.getElementById('register-password');
const toggleRegisterConfirm = document.getElementById('toggleRegisterConfirm');
const registerConfirmInput = document.getElementById('register-confirm');

function toggleVisibility(toggleBtn, inputField) {
  const type = inputField.getAttribute('type') === 'password' ? 'text' : 'password';
  inputField.setAttribute('type', type);
  toggleBtn.classList.toggle('fa-eye-slash');
}

toggleRegisterPassword.addEventListener('click', () => {
  toggleVisibility(toggleRegisterPassword, registerPasswordInput);
});

toggleRegisterConfirm.addEventListener('click', () => {
  toggleVisibility(toggleRegisterConfirm, registerConfirmInput);
});

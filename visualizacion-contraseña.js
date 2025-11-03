
// ===== ojo en contraseña login =====
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('login-password');

togglePassword.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash'); // cambia el ícono
});

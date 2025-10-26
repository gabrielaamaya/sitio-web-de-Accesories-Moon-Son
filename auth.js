// ===== FUNCIONES DE AUTENTICACIÓN =====
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Simulación de inicio de sesión
    if (email && password) {
        currentUser = {
            name: "Juan Pérez",
            email: email
        };
        
        showNotification("Inicio de sesión exitoso");
        showSection('inicio');
        
        // Actualizar interfaz para usuario logueado
        updateUserInterface();
        
        // Limpiar formulario
        loginForm.reset();
    } else {
        showNotification("Por favor, completa todos los campos", 'error');
    }
}

function handleLogout() {
    currentUser = null;
    showNotification("Sesión cerrada");
    showSection('inicio');
    
    // Restaurar botones originales
    restoreOriginalButtons();
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm').value;
    
    if (password !== confirmPassword) {
        showNotification("Las contraseñas no coinciden", 'error');
        return;
    }
    
    // Simulación de registro
    if (name && email && password) {
        currentUser = {
            name: name,
            email: email
        };
        
        showNotification("Cuenta creada exitosamente");
        showSection('inicio');
        
        // Actualizar interfaz para usuario logueado
        updateUserInterface();
        
        // Limpiar formulario
        registerForm.reset();
    } else {
        showNotification("Por favor, completa todos los campos", 'error');
    }
}

function updateUserInterface() {
    loginBtn.innerHTML = `
        <i class="fa-solid fa-right-from-bracket"></i>
        <span>Cerrar Sesión</span>
    `;
    registerBtn.style.display = 'none';
    
    // Cambiar comportamiento del botón de login para cerrar sesión
    loginBtn.removeEventListener('click', () => showSection('iniciar-sesion'));
    loginBtn.addEventListener('click', handleLogout);
}

function restoreOriginalButtons() {
    loginBtn.innerHTML = `
        <i class="fa-solid fa-right-to-bracket"></i>
        <span>Iniciar Sesión</span>
    `;
    registerBtn.style.display = 'inline-block';
    
    // Restaurar eventos originales
    loginBtn.removeEventListener('click', handleLogout);
    loginBtn.addEventListener('click', () => showSection('iniciar-sesion'));
}

function setupAuthEvents() {
    // Formularios
    loginForm.addEventListener('submit', handleLogin);
    registerForm.addEventListener('submit', handleRegister);
}
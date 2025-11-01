// ===== FUNCIONES DE AUTENTICACIÓN =====
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Obtener usuarios registrados del almacenamiento local
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Buscar usuario existente
    const foundUser = users.find(u => u.email === email && u.password === password);

    if (foundUser) {
        currentUser = {
            name: foundUser.name,
            email: foundUser.email,
            phone: foundUser.phone || ''
        };
        
        localStorage.setItem('currentUser', JSON.stringify(currentUser));

        showNotification(`¡Bienvenido, ${foundUser.name}!`);
        showSection('inicio');
        
        updateUserInterface();
        fillUserProfile(); // ← Actualiza la información del perfil
        
        loginForm.reset();
    } else {
        showNotification("Correo o contraseña incorrectos", 'error');
    }
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('currentUser'); // Eliminar sesión activa
    showNotification("Sesión cerrada");
    showSection('inicio');
    
    restoreOriginalButtons();
    
    const userGreeting = document.getElementById('user-greeting');
    if (userGreeting) userGreeting.textContent = '';

    clearUserProfile(); // ← Limpia el perfil
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
    
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.some(u => u.email === email)) {
        showNotification("El correo ya está registrado", 'error');
        return;
    }

    if (name && email && password) {
        const newUser = { name, email, password, phone: '' };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        currentUser = { name, email, phone: '' };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        showNotification(`¡Cuenta creada exitosamente, ${name}!`);
        showSection('inicio');
        
        updateUserInterface();
        fillUserProfile(); // ← Muestra los datos del usuario en el perfil
        
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
    
    loginBtn.removeEventListener('click', () => showSection('iniciar-sesion'));
    loginBtn.addEventListener('click', handleLogout);

    let userGreeting = document.getElementById('user-greeting');
    if (!userGreeting) {
        userGreeting = document.createElement('div');
        userGreeting.id = 'user-greeting';
        userGreeting.style.marginLeft = '15px';
        userGreeting.style.fontWeight = 'bold';
        userGreeting.style.color = '#ffffff';
        loginBtn.parentNode.insertBefore(userGreeting, loginBtn.nextSibling);
    }
    userGreeting.textContent = `Hola, ${currentUser.name}`;
}

function restoreOriginalButtons() {
    loginBtn.innerHTML = `
        <i class="fa-solid fa-right-to-bracket"></i>
        <span>Iniciar Sesión</span>
    `;
    registerBtn.style.display = 'inline-block';
    
    loginBtn.removeEventListener('click', handleLogout);
    loginBtn.addEventListener('click', () => showSection('iniciar-sesion'));

    const userGreeting = document.getElementById('user-greeting');
    if (userGreeting) userGreeting.remove();
}

function setupAuthEvents() {
    loginForm.addEventListener('submit', handleLogin);
    registerForm.addEventListener('submit', handleRegister);

    const savedUser = JSON.parse(localStorage.getItem('currentUser'));
    if (savedUser) {
        currentUser = savedUser;
        updateUserInterface();
        fillUserProfile();
    }
}

// ===== PERFIL DE USUARIO =====
function fillUserProfile() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) return;

    document.getElementById('profile-name').value = user.name || '';
    document.getElementById('profile-email').value = user.email || '';
    document.getElementById('profile-phone').value = user.phone || '';
}

function clearUserProfile() {
    document.getElementById('profile-name').value = '';
    document.getElementById('profile-email').value = '';
    document.getElementById('profile-phone').value = '';
}

// Guardar cambios del perfil
document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.querySelector('#profile-info form');
    if (profileForm) {
        profileForm.addEventListener('submit', e => {
            e.preventDefault();

            const name = document.getElementById('profile-name').value;
            const email = document.getElementById('profile-email').value;
            const phone = document.getElementById('profile-phone').value;

            // Actualizar usuario actual
            let current = JSON.parse(localStorage.getItem('currentUser')) || {};
            current.name = name;
            current.email = email;
            current.phone = phone;
            localStorage.setItem('currentUser', JSON.stringify(current));

            // Actualizar lista de usuarios guardados
            let users = JSON.parse(localStorage.getItem('users')) || [];
            const index = users.findIndex(u => u.email === current.email);
            if (index !== -1) users[index] = current;
            localStorage.setItem('users', JSON.stringify(users));

            showNotification("Perfil actualizado correctamente");
            fillUserProfile();
            updateUserInterface();
        });
    }
});
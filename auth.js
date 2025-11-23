// =============================================
// ===== FUNCIONES DE AUTENTICACIÓN ============
// =============================================

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = users.find(u => u.email.trim() === email && u.password.trim() === password);

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
        fillUserProfile();

        loginForm.reset();
    } else {
        showNotification("Correo o contraseña incorrectos", 'error');
    }
}

// =============================================
// ===== CERRAR SESIÓN ==========================
// =============================================

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    showNotification("Sesión cerrada");
    showSection('inicio');

    restoreOriginalButtons();

    const userGreeting = document.getElementById('user-greeting');
    if (userGreeting) userGreeting.textContent = '';
    clearUserProfile();
}

// =============================================
// ===== VALIDAR CONTRASEÑA FUERTE ==============
// =============================================

function isStrongPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
}

// =============================================
// ===== REGISTRAR USUARIO ======================
// =============================================

function handleRegister(e) {
    e.preventDefault();

    const name = document.getElementById('register-name').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value.trim();
    const confirmPassword = document.getElementById('register-confirm').value.trim();

    // Validar coincidencia
    if (password !== confirmPassword) {
        showNotification("Las contraseñas no coinciden", 'error');
        return;
    }

    // VALIDACIÓN DE CONTRASEÑA FUERTE
    if (!isStrongPassword(password)) {
        showNotification(
            "La contraseña debe incluir: 1 mayúscula, 1 minúscula, 1 número, 1 carácter especial y mínimo 8 caracteres.",
            'error'
        );
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.some(u => u.email.trim() === email)) {
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
        fillUserProfile();

        registerForm.reset();
    } else {
        showNotification("Por favor, completa todos los campos", 'error');
    }
}

// =============================================
// ===== ACTUALIZAR INTERFAZ ====================
// =============================================

function updateUserInterface() {
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

    if (registerBtn) registerBtn.style.display = 'none';

    const dropdownRegister = document.getElementById('dropdown-register');
    if (dropdownRegister) dropdownRegister.style.display = 'none';

    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) logoutBtn.style.display = 'inline-block';
}

// =============================================
// ===== RESTAURAR BOTONES ======================
// =============================================

function restoreOriginalButtons() {
    loginBtn.innerHTML = `
        <i class="fa-solid fa-right-to-bracket"></i>
        <span>Iniciar Sesión</span>
    `;

    if (registerBtn) registerBtn.style.display = 'none';

    const dropdownRegister = document.getElementById('dropdown-register');
    if (dropdownRegister) dropdownRegister.style.display = 'inline-block';

    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) logoutBtn.style.display = 'none';

    const userGreeting = document.getElementById('user-greeting');
    if (userGreeting) userGreeting.remove();
}

// =============================================
// ===== EVENTOS DE AUTENTICACIÓN ===============
// =============================================

function setupAuthEvents() {
    loginForm.addEventListener('submit', handleLogin);
    registerForm.addEventListener('submit', handleRegister);

    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);

    const savedUser = JSON.parse(localStorage.getItem('currentUser'));
    if (savedUser) {
        currentUser = savedUser;
        updateUserInterface();
        fillUserProfile();
    } else {
        if (registerBtn) registerBtn.style.display = 'none';
    }
}

// =============================================
// ===== PERFIL DE USUARIO ======================
// =============================================

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

// =============================================
// ===== GUARDAR CAMBIOS DE PERFIL ==============
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.querySelector('#profile-info form');

    if (profileForm) {
        profileForm.addEventListener('submit', e => {
            e.preventDefault();

            const name = document.getElementById('profile-name').value.trim();
            const email = document.getElementById('profile-email').value.trim();
            const phone = document.getElementById('profile-phone').value.trim();

            let current = JSON.parse(localStorage.getItem('currentUser')) || {};
            const oldEmail = current.email;

            current.name = name;
            current.email = email;
            current.phone = phone;

            localStorage.setItem('currentUser', JSON.stringify(current));

            let users = JSON.parse(localStorage.getItem('users')) || [];
            const index = users.findIndex(u => u.email.trim() === oldEmail.trim());
            if (index !== -1) users[index] = current;
            localStorage.setItem('users', JSON.stringify(users));

            showNotification("Perfil actualizado correctamente");
            fillUserProfile();
            updateUserInterface();
        });
    }

    setupAuthEvents();
});

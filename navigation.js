// ===== FUNCIONES DE NAVEGACIÓN =====
function showSection(sectionId) {
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    
    // Scroll al inicio de la página
    window.scrollTo(0, 0);
}

function setupNavigationEvents() {
    // Navegación principal
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    // Botones de usuario
    loginBtn.addEventListener('click', () => showSection('iniciar-sesion'));
    registerBtn.addEventListener('click', () => showSection('crear-cuenta'));
    cartBtn.addEventListener('click', () => showSection('carrito'));

    // Enlaces entre formularios
    goToRegister.addEventListener('click', (e) => {
        e.preventDefault();
        showSection('crear-cuenta');
    });

    goToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        showSection('iniciar-sesion');
    });

    // Enlaces del footer
    document.querySelectorAll('footer a[data-section]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');
            showSection(sectionId);
        });
    });
}
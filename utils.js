// ===== FUNCIÓN DE NOTIFICACIONES =====
function showNotification(message, type = 'success') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Estilos para la notificación
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: var(--border-radius);
        color: white;
        font-weight: bold;
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        box-shadow: var(--box-shadow);
    `;
    
    // Colores según el tipo
    if (type === 'success') {
        notification.style.backgroundColor = '#1E3A8A';
    } else if (type === 'error') {
        notification.style.backgroundColor = '#FBBF24';
    } else {
        notification.style.backgroundColor = 'var(--primary-color)';
    }
    
    // Agregar al DOM
    document.body.appendChild(notification);
    
    // Animación de entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function setupProfileTabs() {
    // Pestañas del perfil
    profileTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = tab.getAttribute('data-tab');
            
            // Actualizar pestañas activas
            profileTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            profileTabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `profile-${tabId}`) {
                    content.classList.add('active');
                }
            });
        });
    });
}

function setupMobileMenu() {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });
    }
}
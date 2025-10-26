// Datos de productos para Moon & Sun
const products = [
    { 
        id: 1, 
        name: "Bolso de mano para Caballero", 
        price: 35.00, 
        category: "Accesorios", 
        image: "Bolso de mano para Caballero.jpg",
        description: "Estilo elegante de cuero con diseño compacto y enrollo. Perfecto para uso diario y ocasiones especiales."
    },
    { 
        id: 2, 
        name: "Bolso de mano Elegante Para Mujer", 
        price: 45.00, 
        category: "Accesorios", 
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
        description: "Estilo elegante de cuero con diseño compacto y enrollo. Ideal para damas que buscan sofisticación."
    },
    { 
        id: 3, 
        name: "Mochila Estilo Juvenil", 
        price: 30.00, 
        category: "Mochilas", 
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
        description: "Mochila juvenil moderna y compacta con múltiples compartimentos. Resistente y funcional."
    },
    { 
        id: 4, 
        name: "Bolso estilo Cosmético", 
        price: 12.00, 
        category: "Accesorios", 
        image: "Bolso estilo Cosmético.jpg",
        description: "Estuche compacto con múltiples compartimentos, ideal para cosméticos y artículos de belleza."
    },
    { 
        id: 5, 
        name: "Mochila Spider-Man", 
        price: 25.00, 
        category: "Mochilas", 
        image: "images.jpeg",
        description: "Mochila escolar, cómoda, resistente y con múltiples espacios. Diseño Spider-Man para fans."
    },
    { 
        id: 6, 
        name: "Mochila Deportiva", 
        price: 30.00, 
        category: "Mochilas", 
        image: "Mochila Deportiva.jpg",
        description: "Mochila ideal para deportes con compartimentos especializados para equipo y ropa."
    },
    { 
        id: 7, 
        name: "Lonchera Térmica", 
        price: 15.00, 
        category: "Escolar", 
        image: "lonchera termica.jpg",
        description: "Lonchera térmica para mantener la temperatura de tus alimentos durante horas."
    },
    { 
        id: 8, 
        name: "Catera de Mano Para Dama", 
        price: 8.00, 
        category: "Escolar", 
        image: "Catera de Mano Para Mujer.jpg",
        description: "Estuche espacioso para guardar todos tus útiles escolares de manera organizada."
    },
    { 
        id: 9, 
        name: "Bolso de Viaje", 
        price: 35.00, 
        category: "Viaje", 
        image: "Bolso de Viaje.jpg",
        description: "Bolso seguro con múltiples compartimentos para documentos y dinero durante tus viajes."
    },
    { 
        id: 10, 
        name: "Mochila de Viaje", 
        price: 45.00, 
        category: "Viaje", 
        image: "Mochila de Viaje.jpg",
        description: "Mochila espaciosa perfecta para viajes cortos con compartimentos organizados."
    },
    { 
        id: 11, 
        name: "Lente de Sol", 
        price: 45.00, 
        category: "Viaje", 
        image: "lentedesol.jpg",
        description: "Mochila espaciosa perfecta para viajes cortos con compartimentos organizados."
    },
    { 
        id: 12, 
        name: "Reloj", 
        price: 45.00, 
        category: "Viaje", 
        image: "relojdemano.jpg",
        description: "Mochila espaciosa perfecta para viajes cortos con compartimentos organizados."
    }
];

// Estado de la aplicación
let currentUser = null;
let cart = [];
let currentProduct = null;

// Elementos DOM
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const cartBtn = document.getElementById('cart-btn');
const goToRegister = document.getElementById('go-to-register');
const goToLogin = document.getElementById('go-to-login');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const featuredProductsContainer = document.querySelector('.featured-products');
const productsGrid = document.querySelector('.products-grid');
const cartItemsContainer = document.querySelector('.cart-items');
const cartTotalAmount = document.getElementById('cart-total-amount');
const cartCount = document.querySelector('.cart-count');
const productDetailsContainer = document.getElementById('product-details');
const profileTabs = document.querySelectorAll('.profile-tab');
const profileTabContents = document.querySelectorAll('.profile-tab-content');
const applyFiltersBtn = document.getElementById('apply-filters');
const checkoutBtn = document.getElementById('checkout-btn');

// ===== FUNCIONES DE NAVEGACIÓN =====
function showSection(sectionId) {
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    
    // Scroll al inicio de la página
    window.scrollTo(0, 0);
}

// ===== INICIALIZACIÓN =====
function init() {
    // Cargar productos destacados
    loadFeaturedProducts();
    
    // Cargar productos en el catálogo
    loadProducts();
    
    // Configurar eventos
    setupEventListeners();
    
    // Actualizar carrito
    updateCartUI();
}

function setupEventListeners() {
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

    // Formularios
    loginForm.addEventListener('submit', handleLogin);
    registerForm.addEventListener('submit', handleRegister);

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

    // Filtros
    applyFiltersBtn.addEventListener('click', applyFilters);

    // Checkout
    checkoutBtn.addEventListener('click', handleCheckout);
    
    // Enlaces del footer
    document.querySelectorAll('footer a[data-section]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');
            showSection(sectionId);
        });
    });
}

function loadFeaturedProducts() {
    // Mostrar productos aleatorios como destacados
    const shuffledProducts = [...products].sort(() => 0.5 - Math.random());
    const featuredProducts = shuffledProducts.slice(0, 3);
    
    featuredProductsContainer.innerHTML = '';
    featuredProducts.forEach(product => {
        const productCard = createProductCard(product);
        featuredProductsContainer.appendChild(productCard);
    });
}

function loadProducts() {
    productsGrid.innerHTML = '';
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image" style="background-image: url('${product.image}')"></div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <button class="add-to-cart" data-id="${product.id}">Agregar al Carrito</button>
            <button class="btn view-product" style="margin-top: 0.5rem; width: 100%; background-color: var(--primary-color); color: white;" data-id="${product.id}">Ver Detalles</button>
        </div>
    `;
    
    // Agregar evento al botón "Agregar al Carrito"
    const addToCartBtn = card.querySelector('.add-to-cart');
    addToCartBtn.addEventListener('click', () => addToCart(product.id));
    
    // Agregar evento al botón "Ver Detalles" - ahora abre el modal
    const viewProductBtn = card.querySelector('.view-product');
    viewProductBtn.addEventListener('click', () => showProductDetails(product.id));
    
    return card;
}

// ===== FUNCIONES DEL MODAL =====
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentProduct = product;
    
    // Crear contenido del modal
    const modalContent = document.getElementById('modal-product-details');
    modalContent.innerHTML = `
        <div class="modal-product-container">
            <div class="modal-product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="modal-product-info">
                <h2>${product.name}</h2>
                <div class="modal-product-price">$${product.price.toFixed(2)}</div>
                <div class="modal-product-description">
                    <p>${product.description}</p>
                </div>
                <div class="modal-product-actions">
                    <button class="btn" id="modal-add-to-cart">Agregar al Carrito</button>
                    <button class="btn" style="background-color: var(--primary-color); color: white;" id="modal-close-btn">Cerrar</button>
                </div>
            </div>
        </div>
        <div class="modal-product-features">
            <h3>Características del Producto</h3>
            <ul>
                <li>${product.description}</li>
                <li>Material de alta calidad y durabilidad</li>
                <li>Diseño exclusivo Moon & Sun</li>
                <li>Garantía de satisfacción</li>
            </ul>
        </div>
    `;
    
    // Mostrar el modal
    const modal = document.getElementById('product-modal');
    modal.style.display = 'block';
    
    // Agregar eventos a los botones del modal
    document.getElementById('modal-add-to-cart').addEventListener('click', () => {
        addToCart(product.id);
        closeModal();
    });
    
    document.getElementById('modal-close-btn').addEventListener('click', closeModal);
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('product-modal');
    modal.style.display = 'none';
}

// Agregar evento al botón de cerrar (X)
document.querySelector('.close-modal').addEventListener('click', closeModal);

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener('click', (e) => {
    const modal = document.getElementById('product-modal');
    if (e.target === modal) {
        closeModal();
    }
});

// Cerrar modal con tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ===== FUNCIONES DEL CARRITO =====
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.product.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            product: product,
            quantity: 1
        });
    }
    
    updateCartUI();
    
    // Mostrar notificación
    showNotification(`${product.name} agregado al carrito`);
    
    // Mostrar sección del carrito
    showSection('carrito');
}

function updateCartUI() {
    // Actualizar contador del carrito
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Actualizar lista de productos en el carrito
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p>Tu carrito está vacío</p>`;
        cartTotalAmount.textContent = '0.00';
        return;
    }
    
    let totalAmount = 0;
    
    cart.forEach(item => {
        const itemTotal = item.product.price * item.quantity;
        totalAmount += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image" style="background-image: url('${item.product.image}')"></div>
            <div class="cart-item-details">
                <div class="cart-item-title">${item.product.name}</div>
                <div class="cart-item-price">$${item.product.price.toFixed(2)}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn decrease" data-id="${item.product.id}">-</button>
                <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.product.id}">
                <button class="quantity-btn increase" data-id="${item.product.id}">+</button>
            </div>
            <div class="cart-item-total">$${itemTotal.toFixed(2)}</div>
            <button class="remove-item" data-id="${item.product.id}">Eliminar</button>
        `;
        
        cartItemsContainer.appendChild(cartItem);
    });
    
    // Actualizar total
    cartTotalAmount.textContent = totalAmount.toFixed(2);
    
    // Agregar eventos a los botones de cantidad y eliminar
    document.querySelectorAll('.decrease').forEach(btn => {
        btn.addEventListener('click', () => updateQuantity(btn.getAttribute('data-id'), -1));
    });
    
    document.querySelectorAll('.increase').forEach(btn => {
        btn.addEventListener('click', () => updateQuantity(btn.getAttribute('data-id'), 1));
    });
    
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', (e) => {
            const newQuantity = parseInt(e.target.value);
            if (newQuantity > 0) {
                setQuantity(e.target.getAttribute('data-id'), newQuantity);
            }
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', () => removeFromCart(btn.getAttribute('data-id')));
    });
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.product.id === parseInt(productId));
    if (item) {
        item.quantity += change;
        if (item.quantity < 1) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

function setQuantity(productId, quantity) {
    const item = cart.find(item => item.product.id === parseInt(productId));
    if (item) {
        item.quantity = quantity;
        updateCartUI();
    }
}

function removeFromCart(productId) {
    const item = cart.find(item => item.product.id === parseInt(productId));
    if (item) {
        cart = cart.filter(item => item.product.id !== parseInt(productId));
        updateCartUI();
        showNotification(`${item.product.name} eliminado del carrito`);
    }
}

function applyFilters() {
    // Obtener categorías seleccionadas
    const selectedCategories = [];
    document.querySelectorAll('.filter-option input[type="checkbox"]:checked').forEach(checkbox => {
        selectedCategories.push(checkbox.value);
    });
    
    // Obtener rango de precio seleccionado
    const priceRange = document.querySelector('input[name="price"]:checked').value;
    
    // Filtrar productos
    let filteredProducts = products;
    
    if (selectedCategories.length > 0) {
        filteredProducts = filteredProducts.filter(product => 
            selectedCategories.includes(product.category)
        );
    }
    
    if (priceRange !== 'all') {
        filteredProducts = filteredProducts.filter(product => {
            if (priceRange === 'low') return product.price < 20;
            if (priceRange === 'medium') return product.price >= 20 && product.price <= 30;
            if (priceRange === 'high') return product.price > 30;
            return true;
        });
    }
    
    // Mostrar productos filtrados
    productsGrid.innerHTML = '';
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
    
    // Mostrar notificación
    showNotification(`Filtros aplicados: ${filteredProducts.length} productos encontrados`);
}

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
        loginBtn.innerHTML = `
            <i class="fa-solid fa-right-from-bracket"></i>
            <span>Cerrar Sesión</span>
        `;
        registerBtn.style.display = 'none';
        
        // Cambiar comportamiento del botón de login para cerrar sesión
        loginBtn.removeEventListener('click', () => showSection('iniciar-sesion'));
        loginBtn.addEventListener('click', handleLogout);
        
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
    loginBtn.innerHTML = `
        <i class="fa-solid fa-right-to-bracket"></i>
        <span>Iniciar Sesión</span>
    `;
    registerBtn.style.display = 'inline-block';
    
    // Restaurar eventos originales
    loginBtn.removeEventListener('click', handleLogout);
    loginBtn.addEventListener('click', () => showSection('iniciar-sesion'));
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
        loginBtn.innerHTML = `
            <i class="fa-solid fa-right-from-bracket"></i>
            <span>Cerrar Sesión</span>
        `;
        registerBtn.style.display = 'none';
        
        // Cambiar comportamiento del botón de login para cerrar sesión
        loginBtn.removeEventListener('click', () => showSection('iniciar-sesion'));
        loginBtn.addEventListener('click', handleLogout);
        
        // Limpiar formulario
        registerForm.reset();
    } else {
        showNotification("Por favor, completa todos los campos", 'error');
    }
}

function handleCheckout() {
    if (cart.length === 0) {
        showNotification("Tu carrito está vacío", 'error');
        return;
    }
    
    if (!currentUser) {
        showNotification("Por favor, inicia sesión para continuar con la compra", 'error');
        showSection('iniciar-sesion');
        return;
    }
    
    // Simulación de proceso de pago
    const total = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    
    if (confirm(`¿Deseas proceder con el pago de $${total.toFixed(2)}?`)) {
        showNotification("¡Compra realizada con éxito! Recibirás un correo con los detalles de tu pedido.");
        
        // Limpiar carrito después de la compra
        cart = [];
        updateCartUI();
        
        showSection('inicio');
    }
}

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
        notification.style.backgroundColor = '#4CAF50';
    } else if (type === 'error') {
        notification.style.backgroundColor = '#f44336';
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

// ===== SCRIPT PARA ABRIR/CERRAR EL MENÚ =====
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });
    }
    
});

// ===== INICIALIZAR LA APLICACIÓN =====
document.addEventListener('DOMContentLoaded', init);
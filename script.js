// ===== SISTEMA DE TRADUCCIÓN =====
const translations = {
    es: {
        // Navegación
        inicio: "Inicio",
        catalogo: "Catálogo",
        perfil: "Perfil",
        carrito: "Carrito",
        login: "Iniciar Sesión",
        register: "Crear Cuenta",
        logout: "Cerrar Sesión",
        
        // Títulos
        title: "Moon & Sun - Accesorios",
        featured: "RECOMENDADOS PARA TI",
        catalogTitle: "Catálogo de Productos",
        profileTitle: "Perfil de Usuario",
        cartTitle: "Carrito de Compras",
        
        // Promociones
        backToSchool: "¡REGRESO A CLASES!",
        schoolOffers: "SUPER OFERTAS EN ACCESORIOS ESCOLARES",
        schoolDiscount: "Hasta 50% de Descuento en Mochilas, Loncheras y Estuches",
        travelOffers: "GRANDES OFERTAS EN ACCESORIOS DE VIAJE",
        travelDiscount: "Hasta 50% de Descuento en Mochilas, Carteras y Bolsos",
        superOffer: "¡SUPER OFERTA!",
        laverosOffer: "¡LAVEROS 2X1!",
        
        // Filtros
        filters: "Filtros",
        categories: "Categorías",
        price: "Precio",
        all: "Todos",
        lessThan20: "Menos de $20",
        between20and30: "$20 - $30",
        moreThan30: "Más de $30",
        applyFilters: "Aplicar Filtros",
        
        // Productos
        addToCart: "Agregar al Carrito",
        viewDetails: "Ver Detalles",
        emptyCart: "Tu carrito está vacío",
        cartTotal: "Total",
        checkout: "Proceder al Pago",
        
        // Formularios
        loginTitle: "Iniciar Sesión",
        registerTitle: "Crear Cuenta",
        email: "Correo Electrónico",
        password: "Contraseña",
        confirmPassword: "Confirmar Contraseña",
        fullName: "Nombre Completo",
        haveAccount: "¿Ya tienes cuenta?",
        noAccount: "¿No tienes cuenta?",
        loginHere: "Inicia sesión aquí",
        registerHere: "Regístrate aquí",
        
        // Perfil
        personalInfo: "Información Personal",
        myOrders: "Mis Pedidos",
        addresses: "Direcciones",
        settings: "Configuración",
        phone: "Teléfono",
        saveChanges: "Guardar Cambios",
        noOrders: "No tienes pedidos recientes.",
        noAddresses: "No hay direcciones guardadas.",
        
        // Footer
        quickLinks: "Enlaces Rápidos",
        contact: "Contacto",
        rights: "Todos los derechos reservados.",
        
        // Notificaciones
        addedToCart: "agregado al carrito",
        removedFromCart: "eliminado del carrito",
        loginSuccess: "Inicio de sesión exitoso",
        logoutSuccess: "Sesión cerrada",
        registerSuccess: "Cuenta creada exitosamente",
        purchaseSuccess: "¡Compra realizada con éxito! Recibirás un correo con los detalles de tu pedido.",
        emptyCartError: "Tu carrito está vacío",
        loginRequired: "Por favor, inicia sesión para continuar con la compra",
        passwordMismatch: "Las contraseñas no coinciden",
        completeFields: "Por favor, completa todos los campos",
        filtersApplied: "Filtros aplicados: productos encontrados"
    },
    en: {
        // Navigation
        inicio: "Home",
        catalogo: "Catalog",
        perfil: "Profile",
        carrito: "Cart",
        login: "Login",
        register: "Create Account",
        logout: "Logout",
        
        // Titles
        title: "Moon & Sun - Accessories",
        featured: "RECOMMENDED FOR YOU",
        catalogTitle: "Product Catalog",
        profileTitle: "User Profile",
        cartTitle: "Shopping Cart",
        
        // Promotions
        backToSchool: "BACK TO SCHOOL!",
        schoolOffers: "SUPER OFFERS ON SCHOOL ACCESSORIES",
        schoolDiscount: "Up to 50% Off on Backpacks, Lunch Boxes and Pencil Cases",
        travelOffers: "GREAT OFFERS ON TRAVEL ACCESSORIES",
        travelDiscount: "Up to 50% Off on Backpacks, Wallets and Bags",
        superOffer: "SUPER OFFER!",
        laverosOffer: "KEYCHAINS 2X1!",
        
        // Filters
        filters: "Filters",
        categories: "Categories",
        price: "Price",
        all: "All",
        lessThan20: "Less than $20",
        between20and30: "$20 - $30",
        moreThan30: "More than $30",
        applyFilters: "Apply Filters",
        
        // Products
        addToCart: "Add to Cart",
        viewDetails: "View Details",
        emptyCart: "Your cart is empty",
        cartTotal: "Total",
        checkout: "Proceed to Checkout",
        
        // Forms
        loginTitle: "Login",
        registerTitle: "Create Account",
        email: "Email",
        password: "Password",
        confirmPassword: "Confirm Password",
        fullName: "Full Name",
        haveAccount: "Already have an account?",
        noAccount: "Don't have an account?",
        loginHere: "Login here",
        registerHere: "Register here",
        
        // Profile
        personalInfo: "Personal Information",
        myOrders: "My Orders",
        addresses: "Addresses",
        settings: "Settings",
        phone: "Phone",
        saveChanges: "Save Changes",
        noOrders: "You have no recent orders.",
        noAddresses: "No saved addresses.",
        
        // Footer
        quickLinks: "Quick Links",
        contact: "Contact",
        rights: "All rights reserved.",
        
        // Notifications
        addedToCart: "added to cart",
        removedFromCart: "removed from cart",
        loginSuccess: "Login successful",
        logoutSuccess: "Session closed",
        registerSuccess: "Account created successfully",
        purchaseSuccess: "Purchase completed successfully! You will receive an email with your order details.",
        emptyCartError: "Your cart is empty",
        loginRequired: "Please log in to continue with your purchase",
        passwordMismatch: "Passwords do not match",
        completeFields: "Please complete all fields",
        filtersApplied: "Filters applied: products found"
    }
};

// Datos de productos actualizados para Moon & Sun
const products = [
    { 
        id: 1, 
        name: "Bolso de mano para Caballero", 
        price: 34.99, 
        category: "Accesorios", 
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
        description: "Estilo elegante de cuero con diseño compacto y enrollo. Perfecto para uso diario y ocasiones especiales."
    },
    { 
        id: 2, 
        name: "Bolso de mano Elegante", 
        price: 26.99, 
        category: "Accesorios", 
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
        description: "Estilo elegante de cuero con diseño compacto y enrollo. Ideal para damas que buscan sofisticación."
    },
    { 
        id: 3, 
        name: "Mochila Estilo Juvenil", 
        price: 26.99, 
        category: "Mochilas", 
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
        description: "Mochila juvenil moderna y compacta con múltiples compartimentos. Resistente y funcional."
    },
    { 
        id: 4, 
        name: "Bolso estilo Cosmético", 
        price: 10.50, 
        category: "Accesorios", 
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
        description: "Estuche compacto con múltiples compartimentos, ideal para cosméticos y artículos de belleza."
    },
    { 
        id: 5, 
        name: "Mochila Spider-Man", 
        price: 25.60, 
        category: "Mochilas", 
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
        description: "Mochila escolar, cómoda, resistente y con múltiples espacios. Diseño Spider-Man para fans."
    },
    { 
        id: 6, 
        name: "Mochila Deportiva", 
        price: 29.99, 
        category: "Mochilas", 
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
        description: "Mochila ideal para deportes con compartimentos especializados para equipo y ropa."
    },
    { 
        id: 7, 
        name: "Lonchera Térmica", 
        price: 15.99, 
        category: "Escolar", 
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
        description: "Lonchera térmica para mantener la temperatura de tus alimentos durante horas."
    },
    { 
        id: 8, 
        name: "Estuche Escolar", 
        price: 8.99, 
        category: "Escolar", 
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
        description: "Estuche espacioso para guardar todos tus útiles escolares de manera organizada."
    },
    { 
        id: 9, 
        name: "Cartera de Viaje", 
        price: 32.99, 
        category: "Viaje", 
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
        description: "Cartera segura con múltiples compartimentos para documentos y dinero durante tus viajes."
    },
    { 
        id: 10, 
        name: "Mochila de Viaje", 
        price: 45.99, 
        category: "Viaje", 
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
        description: "Mochila espaciosa perfecta para viajes cortos con compartimentos organizados."
    }
];

// Estado de la aplicación
let currentUser = null;
let cart = [];
let currentProduct = null;
let currentLanguage = 'es';

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
const languageSelect = document.getElementById('language-select');

// ===== SISTEMA DE TRADUCCIÓN =====
function changeLanguage(lang) {
    currentLanguage = lang;
    applyTranslations();
    
    // Guardar preferencia de idioma
    localStorage.setItem('language', lang);
    
    // Actualizar el título de la página
    document.title = translations[lang].title;
}

function applyTranslations() {
    const t = translations[currentLanguage];
    
    // Navegación
    document.querySelectorAll('[data-translate="inicio"]').forEach(el => {
        el.textContent = t.inicio;
    });
    
    document.querySelectorAll('[data-translate="catalogo"]').forEach(el => {
        el.textContent = t.catalogo;
    });
    
    document.querySelectorAll('[data-translate="perfil"]').forEach(el => {
        el.textContent = t.perfil;
    });
    
    // Botones
    if (loginBtn.textContent !== t.logout) {
        loginBtn.textContent = t.login;
    }
    registerBtn.textContent = t.register;
    cartBtn.innerHTML = `${t.carrito} <span class="cart-count">0</span>`;
    
    // Títulos de secciones
    document.querySelectorAll('[data-translate="featured"]').forEach(el => {
        el.textContent = t.featured;
    });
    
    document.querySelectorAll('[data-translate="catalogTitle"]').forEach(el => {
        el.textContent = t.catalogTitle;
    });
    
    document.querySelectorAll('[data-translate="profileTitle"]').forEach(el => {
        el.textContent = t.profileTitle;
    });
    
    document.querySelectorAll('[data-translate="cartTitle"]').forEach(el => {
        el.textContent = t.cartTitle;
    });
    
    // Promociones
    document.querySelectorAll('[data-translate="backToSchool"]').forEach(el => {
        el.textContent = t.backToSchool;
    });
    
    document.querySelectorAll('[data-translate="schoolOffers"]').forEach(el => {
        el.textContent = t.schoolOffers;
    });
    
    document.querySelectorAll('[data-translate="schoolDiscount"]').forEach(el => {
        el.textContent = t.schoolDiscount;
    });
    
    document.querySelectorAll('[data-translate="travelOffers"]').forEach(el => {
        el.textContent = t.travelOffers;
    });
    
    document.querySelectorAll('[data-translate="travelDiscount"]').forEach(el => {
        el.textContent = t.travelDiscount;
    });
    
    document.querySelectorAll('[data-translate="superOffer"]').forEach(el => {
        el.textContent = t.superOffer;
    });
    
    document.querySelectorAll('[data-translate="laverosOffer"]').forEach(el => {
        el.textContent = t.laverosOffer;
    });
    
    // Filtros
    document.querySelectorAll('[data-translate="filters"]').forEach(el => {
        el.textContent = t.filters;
    });
    
    document.querySelectorAll('[data-translate="categories"]').forEach(el => {
        el.textContent = t.categories;
    });
    
    document.querySelectorAll('[data-translate="price"]').forEach(el => {
        el.textContent = t.price;
    });
    
    document.querySelectorAll('[data-translate="all"]').forEach(el => {
        el.textContent = t.all;
    });
    
    document.querySelectorAll('[data-translate="lessThan20"]').forEach(el => {
        el.textContent = t.lessThan20;
    });
    
    document.querySelectorAll('[data-translate="between20and30"]').forEach(el => {
        el.textContent = t.between20and30;
    });
    
    document.querySelectorAll('[data-translate="moreThan30"]').forEach(el => {
        el.textContent = t.moreThan30;
    });
    
    document.querySelectorAll('[data-translate="applyFilters"]').forEach(el => {
        el.textContent = t.applyFilters;
    });
    
    // Formularios
    document.querySelectorAll('[data-translate="loginTitle"]').forEach(el => {
        el.textContent = t.loginTitle;
    });
    
    document.querySelectorAll('[data-translate="registerTitle"]').forEach(el => {
        el.textContent = t.registerTitle;
    });
    
    document.querySelectorAll('[data-translate="email"]').forEach(el => {
        el.textContent = t.email;
    });
    
    document.querySelectorAll('[data-translate="password"]').forEach(el => {
        el.textContent = t.password;
    });
    
    document.querySelectorAll('[data-translate="confirmPassword"]').forEach(el => {
        el.textContent = t.confirmPassword;
    });
    
    document.querySelectorAll('[data-translate="fullName"]').forEach(el => {
        el.textContent = t.fullName;
    });
    
    document.querySelectorAll('[data-translate="haveAccount"]').forEach(el => {
        el.textContent = t.haveAccount;
    });
    
    document.querySelectorAll('[data-translate="noAccount"]').forEach(el => {
        el.textContent = t.noAccount;
    });
    
    document.querySelectorAll('[data-translate="loginHere"]').forEach(el => {
        el.textContent = t.loginHere;
    });
    
    document.querySelectorAll('[data-translate="registerHere"]').forEach(el => {
        el.textContent = t.registerHere;
    });
    
    // Perfil
    document.querySelectorAll('[data-translate="personalInfo"]').forEach(el => {
        el.textContent = t.personalInfo;
    });
    
    document.querySelectorAll('[data-translate="myOrders"]').forEach(el => {
        el.textContent = t.myOrders;
    });
    
    document.querySelectorAll('[data-translate="addresses"]').forEach(el => {
        el.textContent = t.addresses;
    });
    
    document.querySelectorAll('[data-translate="settings"]').forEach(el => {
        el.textContent = t.settings;
    });
    
    document.querySelectorAll('[data-translate="phone"]').forEach(el => {
        el.textContent = t.phone;
    });
    
    document.querySelectorAll('[data-translate="saveChanges"]').forEach(el => {
        el.textContent = t.saveChanges;
    });
    
    document.querySelectorAll('[data-translate="noOrders"]').forEach(el => {
        el.textContent = t.noOrders;
    });
    
    document.querySelectorAll('[data-translate="noAddresses"]').forEach(el => {
        el.textContent = t.noAddresses;
    });
    
    // Footer
    document.querySelectorAll('[data-translate="quickLinks"]').forEach(el => {
        el.textContent = t.quickLinks;
    });
    
    document.querySelectorAll('[data-translate="contact"]').forEach(el => {
        el.textContent = t.contact;
    });
    
    document.querySelectorAll('[data-translate="rights"]').forEach(el => {
        el.innerHTML = `&copy; 2023 Moon & Sun. ${t.rights}`;
    });
    
    // Actualizar botones de productos
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.textContent = t.addToCart;
    });
    
    document.querySelectorAll('.view-product').forEach(btn => {
        btn.textContent = t.viewDetails;
    });
    
    // Actualizar checkout
    checkoutBtn.textContent = t.checkout;
    
    // Actualizar carrito si está vacío
    if (cartItemsContainer.querySelector('p')) {
        cartItemsContainer.querySelector('p').textContent = t.emptyCart;
    }
    
    // Actualizar total del carrito
    document.querySelector('.cart-total').innerHTML = `${t.cartTotal}: $<span id="cart-total-amount">0.00</span>`;
}

function initLanguage() {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        changeLanguage(savedLanguage);
        languageSelect.value = savedLanguage;
    }
}

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
    // Inicializar idioma
    initLanguage();
    
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
    
    // Selector de idioma
    languageSelect.addEventListener('change', (e) => {
        changeLanguage(e.target.value);
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
            <button class="add-to-cart" data-id="${product.id}">${translations[currentLanguage].addToCart}</button>
            <button class="btn view-product" style="margin-top: 0.5rem; width: 100%; background-color: var(--primary-color); color: white;" data-id="${product.id}">${translations[currentLanguage].viewDetails}</button>
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
                    <button class="btn" id="modal-add-to-cart">${translations[currentLanguage].addToCart}</button>
                    <button class="btn" style="background-color: var(--primary-color); color: white;" id="modal-close-btn">${translations[currentLanguage].viewDetails === "Ver Detalles" ? "Cerrar" : "Close"}</button>
                </div>
            </div>
        </div>
        <div class="modal-product-features">
            <h3>${translations[currentLanguage].viewDetails === "Ver Detalles" ? "Características del Producto" : "Product Features"}</h3>
            <ul>
                <li>${product.description}</li>
                <li>${translations[currentLanguage].viewDetails === "Ver Detalles" ? "Material de alta calidad y durabilidad" : "High quality and durable material"}</li>
                <li>${translations[currentLanguage].viewDetails === "Ver Detalles" ? "Diseño exclusivo Moon & Sun" : "Exclusive Moon & Sun design"}</li>
                <li>${translations[currentLanguage].viewDetails === "Ver Detalles" ? "Garantía de satisfacción" : "Satisfaction guarantee"}</li>
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
    showNotification(`${product.name} ${translations[currentLanguage].addedToCart}`);
    
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
        cartItemsContainer.innerHTML = `<p>${translations[currentLanguage].emptyCart}</p>`;
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
        showNotification(`${item.product.name} ${translations[currentLanguage].removedFromCart}`);
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
    showNotification(`${translations[currentLanguage].filtersApplied.replace('productos encontrados', `${filteredProducts.length} productos encontrados`)}`);
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
        
        showNotification(translations[currentLanguage].loginSuccess);
        showSection('inicio');
        
        // Actualizar interfaz para usuario logueado
        loginBtn.textContent = translations[currentLanguage].logout;
        registerBtn.style.display = 'none';
        
        // Cambiar comportamiento del botón de login para cerrar sesión
        loginBtn.removeEventListener('click', () => showSection('iniciar-sesion'));
        loginBtn.addEventListener('click', handleLogout);
        
        // Limpiar formulario
        loginForm.reset();
    } else {
        showNotification(translations[currentLanguage].completeFields, 'error');
    }
}

function handleLogout() {
    currentUser = null;
    showNotification(translations[currentLanguage].logoutSuccess);
    showSection('inicio');
    
    // Restaurar botones originales
    loginBtn.textContent = translations[currentLanguage].login;
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
        showNotification(translations[currentLanguage].passwordMismatch, 'error');
        return;
    }
    
    // Simulación de registro
    if (name && email && password) {
        currentUser = {
            name: name,
            email: email
        };
        
        showNotification(translations[currentLanguage].registerSuccess);
        showSection('inicio');
        
        // Actualizar interfaz para usuario logueado
        loginBtn.textContent = translations[currentLanguage].logout;
        registerBtn.style.display = 'none';
        
        // Cambiar comportamiento del botón de login para cerrar sesión
        loginBtn.removeEventListener('click', () => showSection('iniciar-sesion'));
        loginBtn.addEventListener('click', handleLogout);
        
        // Limpiar formulario
        registerForm.reset();
    } else {
        showNotification(translations[currentLanguage].completeFields, 'error');
    }
}

function handleCheckout() {
    if (cart.length === 0) {
        showNotification(translations[currentLanguage].emptyCartError, 'error');
        return;
    }
    
    if (!currentUser) {
        showNotification(translations[currentLanguage].loginRequired, 'error');
        showSection('iniciar-sesion');
        return;
    }
    
    // Simulación de proceso de pago
    const total = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    
    if (confirm(`¿Deseas proceder con el pago de $${total.toFixed(2)}?`)) {
        showNotification(translations[currentLanguage].purchaseSuccess);
        
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

// ===== INICIALIZAR LA APLICACIÓN =====
document.addEventListener('DOMContentLoaded', init);
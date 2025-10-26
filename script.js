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
    setupNavigationEvents();
    setupAuthEvents();
    setupModalEvents();
    setupProfileTabs();
    setupMobileMenu();
    
    // Filtros
    applyFiltersBtn.addEventListener('click', applyFilters);

    // Checkout
    checkoutBtn.addEventListener('click', handleCheckout);
}

// ===== INICIALIZAR LA APLICACIÓN =====
document.addEventListener('DOMContentLoaded', init);
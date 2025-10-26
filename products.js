// ===== FUNCIONES DE PRODUCTOS =====
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
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

function setupModalEvents() {
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
}
// ===== FUNCIONES DEL MODAL =====
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentProduct = product;
    
    // Crear contenido del modal (ahora con carrusel)
    const modalContent = document.getElementById('modal-product-details');
    const images = product.images && product.images.length > 0 ? product.images : [product.image];

    modalContent.innerHTML = `
        <div class="modal-product-container">
            <div class="modal-product-image">
                <!-- Carrusel de imágenes -->
                <div class="carousel-container">
                    <div class="carousel-slide">
                        ${images.map(img => `<img src="${img}" alt="${product.name}">`).join('')}
                    </div>
                    <button class="carousel-btn prev">&#10094;</button>
                    <button class="carousel-btn next">&#10095;</button>
                    <div class="carousel-dots">
                        ${images.map((_, index) => `<div class="carousel-dot ${index === 0 ? 'active' : ''}"></div>`).join('')}
                    </div>
                </div>
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

    // Inicializar el carrusel
    initCarousel();
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

// ================================
// FUNCIÓN PARA INICIALIZAR EL CARRUSEL
// ================================
function initCarousel() {
    const slide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const dots = document.querySelectorAll('.carousel-dot');

    if (!slide || images.length === 0) return;

    let index = 0;

    function showSlide(n) {
        if (n >= images.length) index = 0;
        else if (n < 0) index = images.length - 1;
        else index = n;

        slide.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    prevBtn.addEventListener('click', () => showSlide(index - 1));
    nextBtn.addEventListener('click', () => showSlide(index + 1));

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => showSlide(i));
    });
}




// ===== MOSTRAR MODAL DE PAGO DIRECTAMENTE =====
document.getElementById('checkout-btn').addEventListener('click', function() {
    document.getElementById('payment-modal').style.display = 'flex';
});

// ===== CERRAR MODAL =====
document.getElementById('cancel-payment').addEventListener('click', function() {
    document.getElementById('payment-modal').style.display = 'none';
});

// ===== MOSTRAR / OCULTAR CAMPOS SEGÚN MÉTODO DE PAGO =====
document.querySelectorAll('input[name="payment-method"]').forEach(radio => {
    radio.addEventListener('change', function() {
        const cardInfo = document.getElementById('card-info');
        if (this.value === 'tarjeta') {
            cardInfo.style.display = 'block';
        } else {
            cardInfo.style.display = 'none';
            // 🔹 Limpiar campos si cambia a efectivo
            cardInfo.querySelectorAll('input').forEach(input => input.value = '');
        }
    });
});

// ===== CONFIRMAR PAGO =====
document.getElementById('confirm-payment').addEventListener('click', function() {
    const metodo = document.querySelector('input[name="payment-method"]:checked').value;
    alert('Pago realizado con ' + metodo.toUpperCase() + '. ¡Gracias por tu compra!');
    
    // 🔹 Cerrar modal solo si es pago en efectivo
    if (metodo === 'efectivo') {
        document.getElementById('payment-modal').style.display = 'none';
    }

    // 🔹 Limpiar campos después del pago
    const cardInfo = document.getElementById('card-info');
    cardInfo.querySelectorAll('input').forEach(input => input.value = '');
});

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


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

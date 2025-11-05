  // Mostrar el modal de pago
    document.getElementById('checkout-btn').addEventListener('click', function() {
        document.getElementById('payment-modal').style.display = 'flex';
    });

    // Cerrar modal
    document.getElementById('cancel-payment').addEventListener('click', function() {
        document.getElementById('payment-modal').style.display = 'none';
    });

    // Mostrar u ocultar campos según método de pago
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

    // Confirmar pago
    document.getElementById('confirm-payment').addEventListener('click', function() {
        const metodo = document.querySelector('input[name="payment-method"]:checked').value;
        alert('Pago realizado con ' + metodo.toUpperCase() + '. ¡Gracias por tu compra!');
        
        // 🔹 Mantener el modal abierto si es pago con tarjeta
        if (metodo === 'efectivo') {
            document.getElementById('payment-modal').style.display = 'none';
        }

        // 🔹 Limpiar campos después de confirmar el pago
        const cardInfo = document.getElementById('card-info');
        cardInfo.querySelectorAll('input').forEach(input => input.value = '');
    });
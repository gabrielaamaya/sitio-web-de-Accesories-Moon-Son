document.addEventListener('DOMContentLoaded', function() {
    const checkoutBtn = document.getElementById('checkout-btn');
    const cancelPayment = document.getElementById('cancel-payment');
    const confirmPayment = document.getElementById('confirm-payment');
    const paymentModal = document.getElementById('payment-modal');
    const cardInfo = document.getElementById('card-info');
    const paymentMethods = document.querySelectorAll('input[name="payment-method"]');

    // Verificar que los elementos existan antes de agregar eventos
    if (checkoutBtn && paymentModal) {
        // Mostrar modal
        checkoutBtn.addEventListener('click', () => {
            paymentModal.style.display = 'flex';
        });
    }

    if (cancelPayment && paymentModal) {
        // Cerrar modal
        cancelPayment.addEventListener('click', () => {
            paymentModal.style.display = 'none';
        });
    }

    if (paymentMethods.length > 0) {
        // Mostrar u ocultar campos según método de pago
        paymentMethods.forEach(radio => {
            radio.addEventListener('change', function() {
                if (this.value === 'tarjeta' && cardInfo) {
                    cardInfo.style.display = 'block';
                } else if (cardInfo) {
                    cardInfo.style.display = 'none';
                }
            });
        });
    }

    if (confirmPayment && paymentModal) {
        // Confirmar pago
        confirmPayment.addEventListener('click', () => {
            const metodoSeleccionado = document.querySelector('input[name="payment-method"]:checked');
            
            if (!metodoSeleccionado) {
                alert('Por favor, selecciona un método de pago.');
                return;
            }

            const metodo = metodoSeleccionado.value;
            alert(`Pago realizado con ${metodo.toUpperCase()}. ¡Gracias por tu compra!`);
            paymentModal.style.display = 'none';
        });
    }
});
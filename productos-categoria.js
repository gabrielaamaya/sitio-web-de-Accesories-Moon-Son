// productos-categoria.js
import { products } from './data-products.js';

// ===== Mostrar productos según la página =====

// Obtener el nombre del archivo actual (por ejemplo mochila.html → "mochila")
const currentPage = window.location.pathname.split('/').pop().replace('.html', '').toLowerCase();

// Relacionar nombres de página con categorías del array
const categoryMap = {
    billetera: "Accesorios",
    lonchera: "Escolar",
    mochila: "Mochilas",
    cangurera: "Accesorios",
    bolso: "Accesorios",
    estuche: "Escolar",
    multiusos: "Escolar",
    lentes: "Accesorios"
};

const category = categoryMap[currentPage] || null;

// Seleccionar contenedor principal
const productsGrid = document.querySelector('.products-grid');

// Mostrar productos por categoría
if (category) {
    const filtered = products.filter(p => p.category === category);

    if (filtered.length > 0) {
        productsGrid.innerHTML = filtered.map(p => `
            <div class="product-card">
                <div class="product-image" style="background-image: url('${p.image}')"></div>
                <div class="product-info">
                    <h3>${p.name}</h3>
                    <div class="product-price">$${p.price.toFixed(2)}</div>
                    <button class="add-to-cart" data-id="${p.id}">Agregar al Carrito</button>
                    <button class="btn view-product" style="margin-top: 0.5rem; width: 100%; background-color: var(--primary-color); color: white;" data-id="${p.id}">Ver Detalles</button>
                </div>
            </div>
        `).join('');
    } else {
        productsGrid.innerHTML = `<p style="text-align:center; font-size:18px;">No hay productos en esta categoría.</p>`;
    }
} else {
    productsGrid.innerHTML = `<p style="text-align:center; font-size:18px;">No se encontró la categoría.</p>`;
}

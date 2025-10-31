// ===== Barra de búsqueda ===== //
const searchContainer = document.querySelector('.search-container');
const searchInput = document.getElementById('search-input');
const suggestions = document.querySelector('.search-suggestions');

// Mostrar sugerencias al enfocar el input
searchInput.addEventListener('focus', () => {
  searchContainer.classList.add('active');
});

// No cerrar si el mouse está sobre las sugerencias
let isOverSuggestions = false;

suggestions.addEventListener('mouseenter', () => {
  isOverSuggestions = true;
});

suggestions.addEventListener('mouseleave', () => {
  isOverSuggestions = false;
});

// Ocultar sugerencias solo si el mouse NO está encima
searchInput.addEventListener('blur', () => {
  setTimeout(() => {
    if (!isOverSuggestions) {
      searchContainer.classList.remove('active');
    }
  }, 150);
});

// Buscar al presionar Enter
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    alert(`Buscando: ${searchInput.value.trim()}`);
  }
});

// Al hacer clic en una sugerencia
document.querySelectorAll('.search-suggestions li').forEach(item => {
  item.addEventListener('click', () => {
    searchInput.value = item.textContent;
    searchContainer.classList.remove('active');
    alert(`Buscando: ${item.textContent}`);
  });
});









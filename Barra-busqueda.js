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

// Función para redirigir según el término
function buscarTermino(termino) {
  const paginas = {
    billetera: 'billetera.html',
    lonchera: 'lonchera.html',
    mochila: 'mochila.html',
    cangurera: 'cangurera.html',
    bolso: 'bolso.html',
    estuche: 'estuche.html',
    multiusos: 'multiusos.html',
    lente: 'lente.html'
  };

  termino = termino.toLowerCase().trim();

  if (paginas[termino]) {
    window.location.href = paginas[termino]; // redirige a la página correspondiente
  } else {
    alert(`No se encontró página para: ${termino}`);
  }
}

// Buscar al presionar Enter
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    buscarTermino(searchInput.value);
  }
});

// Al hacer clic en una sugerencia
document.querySelectorAll('.search-suggestions li').forEach(item => {
  item.addEventListener('click', () => {
    const termino = item.textContent;
    searchInput.value = termino;
    searchContainer.classList.remove('active');
    buscarTermino(termino);
  });
});






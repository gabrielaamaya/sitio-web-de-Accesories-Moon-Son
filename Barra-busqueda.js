// ===== Función de búsqueda =====
document.getElementById('search-btn').addEventListener('click', function () {
    const query = document.getElementById('search-input').value.trim().toLowerCase();
    if (query !== "") {
        alert(`Buscando: ${query}`);
        // Aquí podrías filtrar tus productos, redirigir, etc.
    }
});

// Permitir búsqueda al presionar Enter
document.getElementById('search-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('search-btn').click();
    }
});

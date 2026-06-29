// Lógica del toggle de tema oscuro/claro
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Cargar preferencia guardada
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.textContent = '☀️ Modo Claro';
}

// Manejar el clic del botón
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    const isDark = body.classList.contains('dark-theme');
    themeToggle.textContent = isDark ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
    
    // Guardar preferencia
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

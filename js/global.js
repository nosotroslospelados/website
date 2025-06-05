// Establecer el año actual
const yearElement = document.getElementById('year');
    if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
        }



// Función para cerrar el menú móvil
function closeCustomMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const menuContent = document.getElementById('menuContent');

    if (menuToggle && menuContent) {
        menuToggle.classList.remove('custom-open');
        menuContent.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const menuContent = document.getElementById('menuContent');

    if (menuToggle && menuContent) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('custom-open');
            menuContent.style.display = menuContent.style.display === 'block' ? 'none' : 'block';
        });

        document.addEventListener('click', function(event) {
            if (!menuToggle.contains(event.target) && !menuContent.contains(event.target)) {
                menuToggle.classList.remove('custom-open');
                menuContent.style.display = 'none';
            }
        });
    }
});
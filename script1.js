// Variables para rastrear el índice de la imagen actual y el intervalo de tiempo
let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const slideWidth = slides[0].clientWidth; // Ancho de cada slide
const container = document.querySelector(".slider-container");

 // Función para mover el slider hacia la derecha
function moverSlider() {
    currentSlideIndex++;

     // Si llegamos al final, vuelve al principio
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }

     // Calcula la posición de desplazamiento para mostrar el próximo slide al lado de los anteriores
     const newPosition = currentSlideIndex * slideWidth;

     // Establece la posición de desplazamiento del contenedor
    container.scrollTo({
        left: newPosition,
         behavior: 'smooth' // Agrega desplazamiento suave
    });
}

 // Establece un intervalo para llamar a la función moverSlider cada cierto tiempo (por ejemplo, cada 3 segundos)
 setInterval(moverSlider, 3000); // Cambia el valor 3000 según la velocidad deseada
function toggleMenu() {
var menu = document.getElementById("menu");

if (menu.classList.contains("closed")) {
    menu.classList.remove("closed");
    menu.classList.add("open");
} else {
    menu.classList.remove("open");
    menu.classList.add("closed");
}
}

 // Cerrar la ventana del menú al hacer clic fuera de ella
window.addEventListener("click", function(event) {
var menu = document.getElementById("menu");
var target = event.target;
var isMenuIcon = target.classList.contains("menu-icon");
var isInsideMenu = menu.contains(target);
var isMenuOpen = menu.classList.contains("open");

if (isMenuOpen && !isMenuIcon && !isInsideMenu) {
    toggleMenu();
}
});
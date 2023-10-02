document.getElementById("miFormulario").addEventListener("submit", function(event){
  event.preventDefault();
  alert("¡Formulario enviado!");
});

// Selección del encabezado
const header = document.querySelector("header");

// Variable para rastrear la posición anterior del desplazamiento
let prevScrollPos = window.pageYOffset;

// Función para manejar el evento de desplazamiento
window.addEventListener("scroll", () => {
    const currentScrollPos = window.pageYOffset;
    
    if (prevScrollPos > currentScrollPos) {
        // El usuario está desplazándose hacia arriba, muestra el encabezado
        header.style.top = "0";
    } else {
        // El usuario está desplazándose hacia abajo, oculta el encabezado
        header.style.top = `-${header.offsetHeight}px`;
    }
    
    // Actualiza la posición anterior del desplazamiento
    prevScrollPos = currentScrollPos;
});

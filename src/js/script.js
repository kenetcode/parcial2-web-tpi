document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".tour-item"); // Selecciona todos los elementos de tour
  const toggleButton = document.getElementById("toggle-button"); // Selecciona el botón
  let isExpanded = false; // Estado inicial

  // Muestra solo los primeros 3 elementos al cargar
  items.forEach((item, index) => {
    if (index >= 3) {
      item.classList.add("hidden"); // Oculta elementos a partir del índice 3
      item.style.opacity = "0"; // Inicializa la opacidad a 0
      item.style.transition = "opacity 0.5s ease"; // Aplica la transición
    }
  });

  // Agrega un evento al botón
  toggleButton.addEventListener("click", function () {
    if (isExpanded) {
      // Oculta los elementos adicionales
      items.forEach((item, index) => {
        if (index >= 3) {
          item.style.opacity = "0"; // Desvanece los elementos
          setTimeout(() => {
            item.classList.add("hidden"); // Oculta después de que la animación se completa
          }, 500); // Debe coincidir con la duración de la transición
        }
      });
      toggleButton.textContent = "Ver más"; // Cambia a "Ver más"
    } else {
      // Muestra los elementos adicionales
      items.forEach((item, index) => {
        if (index >= 3) {
          item.classList.remove("hidden"); // Muestra los elementos adicionales
          setTimeout(() => {
            item.style.opacity = "1"; // Desvanece hacia la opacidad 1
          }, 0); // Sin demora para que la transición ocurra
        }
      });
      toggleButton.textContent = "Ver menos"; // Cambia a "Ver menos"
    }

    isExpanded = !isExpanded; // Cambia el estado
  });
});

document.getElementById("menu-icon").addEventListener("click", function () {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active"); // Activa o desactiva la clase 'active'
});

document.getElementById('mostrarReseñas').addEventListener('click', function() {
  // Selecciona todas las reseñas ocultas
  const reseñasOcultas = document.querySelectorAll('#reseñas .hidden');
  reseñasOcultas.forEach(function(reseña) {
      reseña.classList.remove('hidden'); // Muestra las reseñas
  });
  this.style.display = 'none'; // Oculta el botón después de mostrar más reseñas
});

document.getElementById('mostrarPreguntas').addEventListener('click', function() {
  // Selecciona todas las preguntas ocultas
  const preguntasOcultas = document.querySelectorAll('#preguntas .hidden');
  preguntasOcultas.forEach(function(pregunta) {
      pregunta.classList.remove('hidden'); // Muestra las preguntas
  });
  this.style.display = 'none'; // Oculta el botón después de mostrar más preguntas
});


console.log("funcionando")
// Obtén referencias a los elementos relevantes
var modal = document.getElementById("myModal");
var button = document.querySelector(".btn");
var closeButton = document.querySelector(".close");

// Abre el modal cuando se hace clic en el botón
button.addEventListener("click", function() {
  modal.style.display = "block";
});

// Cierra el modal cuando se hace clic en el botón de cierre
closeButton.addEventListener("click", function() {
  modal.style.display = "none";
});

// Cierra el modal cuando se hace clic fuera del contenido del modal
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

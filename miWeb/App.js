console.log("funcionando");

var modal = document.getElementById("myModal");
var button = document.querySelector(".btn");
var closeButton = document.querySelector(".close");

button.addEventListener("click", function () {
  modal.style.display = "block";
});

closeButton.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

//tomar datos ingresados

document
  .getElementById("miFormulario")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar la recarga de la página por defecto

    const nombreInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email");
    const telefonoInput = document.getElementById("telefono");

    const nombre = nombreInput.value;
    const email = emailInput.value;
    const telefono = telefonoInput.value;

    let data = {
      Nombre: nombre,
      Email: email,
      Telefono: telefono,
    };

    let url = "http://localhost:8000/api/crearContactos";
    let params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch(url, params)
      .then((response) => {
        if (response.ok) {
          // Estado 200 - Información guardada con éxito
          alert("Información guardada con éxito");
        } else {
          // Otro estado - Manejar el error o mostrar una alerta de error
          alert("Ocurrió un error al guardar la información");
        }
        return response.json();
      })
  });

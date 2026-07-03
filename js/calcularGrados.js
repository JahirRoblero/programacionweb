function calcular() {
  let valorCelsius = document.getElementById("valorCelcius").value;

  if (valorCelsius == "") {
    Swal.fire({
      icon: "warning",
      title: "Campo vacío",
      text: "Por favor ingresa una temperatura en grados Celsius.",
      confirmButtonText: "Ok",
      confirmButtonColor: "#fbb725",
      background: "#fff8e6",
      color: "#333",
    });
    return;
  }

  let valorFahrenheit = parseInt(valorCelsius) * (9 / 5) + 32;

  document.getElementById("gradosFahrenheit").value = valorFahrenheit;
}


function limpiar() {
  document.getElementById("valorCelcius").value = "";
  document.getElementById("gradosFahrenheit").value = "";

  document.getElementById("valorCelcius").focus();
}
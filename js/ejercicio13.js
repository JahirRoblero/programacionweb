function verificar(event) {
  event.preventDefault();

  let edad = document.getElementById("edad").value.trim();

  if (edad == "") {
    Swal.fire({
      icon: "warning",
      title: "Campo vacío",
      text: "Por favor ingresa tu edad.",
      confirmButtonText: "Ok",
      confirmButtonColor: "#d62b8a",
      background: "#fff2f9",
      color: "#333",
      iconColor: "#d62b8a",
    }).then(() => {
      limpiar();
    });

    return;
  }

  edad = parseInt(edad);

  if (isNaN(edad)) {
    Swal.fire({
      icon: "warning",
      title: "Valor inválido",
      text: "Por favor ingresa solo números.",
      confirmButtonText: "Ok",
      confirmButtonColor: "#d62b8a",
      background: "#fff2f9",
      color: "#333",
      iconColor: "#d62b8a",
    }).then(() => {
      limpiar();
    });

    return;
  }

  if (edad < 0) {
    Swal.fire({
      icon: "warning",
      title: "Valor negativo",
      text: "Por favor ingresa una edad válida.",
      confirmButtonText: "Ok",
      confirmButtonColor: "#d62b8a",
      background: "#fff2f9",
      color: "#333",
      iconColor: "#d62b8a",
    }).then(() => {
      limpiar();
    });

    return;
  }

  if (edad >= 18) {
    document.getElementById("resultado").value = "PUEDE VOTAR";
    document.getElementById("resultado").style.backgroundColor = "#d4edda";
    document.getElementById("resultado").style.color = "#155724";
    document.getElementById("resultado").style.border = "2px solid #28a745";

    Swal.fire({
      icon: "success",
      title: "Si puedes votar",
      text: "Eres mayor de edad, puedes votar.",
      confirmButtonText: "Ok",
      confirmButtonColor: "#28a745",
      background: "#f4fff6",
      color: "#333",
    });
  } else {
    document.getElementById("resultado").value = "NO PUEDE VOTAR";
    document.getElementById("resultado").style.backgroundColor = "#f8d7da";
    document.getElementById("resultado").style.color = "#721c24";
    document.getElementById("resultado").style.border = "2px solid #dc3545";

    Swal.fire({
      icon: "error",
      title: "No puedes votar",
      text: "Eres menor de edad, no puedes votar.",
      confirmButtonText: "Ok",
      confirmButtonColor: "#dc3545",
      background: "#fff5f5",
      color: "#333",
    });
  }
}

function limpiar() {
  const edad = document.getElementById("edad");
  const resultado = document.getElementById("resultado");

  edad.value = "";
  resultado.value = "";
  resultado.style.width = "100%";
  resultado.style.padding = "10px";
  resultado.style.backgroundColor = "white";
  resultado.style.color = "#000";
  resultado.style.border = "1px solid #bbb";
  resultado.style.borderRadius = "7px";
  resultado.style.boxShadow = "none";
  resultado.style.outline = "none";

  edad.focus();
}

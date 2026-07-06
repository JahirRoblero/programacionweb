const sumar = (a, b) => a + b;

const restar = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => b !== 0 ? a / b : "Error: División por cero";

const tieneLetras = (texto) => {
  return /[a-zA-ZáéíóúÁÉÍÓÚñÑ]/.test(texto);
};

const esNumeroValido = (texto) => {
  return /^-?\d+(\.\d+)?$/.test(texto);
};

const mostrarAlerta = (titulo, mensaje) => {
  Swal.fire({
    icon: "error",
    title: titulo,
    text: mensaje,
    confirmButtonText: "Ok",
    confirmButtonColor: "#fb2525ff",
    background: "#ffe6e6ff",
    color: "#000000ff",
    iconColor: "#ff0000ff",
  });
};

const calcularOperacion = (operacion) => {
  const numero1 = document.getElementById("numero1").value.trim();
  const numero2 = document.getElementById("numero2").value.trim();
  const resultado = document.getElementById("resultado");

  if (numero1 === "" && numero2 === "") {
    mostrarAlerta(
      "Campos vacíos",
      "Debes ingresar el primer número y el segundo número."
    );

    resultado.value = "";
    document.getElementById("numero1").focus();
    return;
  }

  if (numero1 === "") {
    mostrarAlerta(
      "Primer campo vacío",
      "Debes ingresar el primer número."
    );

    resultado.value = "";
    document.getElementById("numero1").focus();
    return;
  }

  if (numero2 === "") {
    mostrarAlerta(
      "Segundo campo vacío",
      "Debes ingresar el segundo número."
    );

    resultado.value = "";
    document.getElementById("numero2").focus();
    return;
  }

  if (tieneLetras(numero1)) {
    mostrarAlerta(
      "Letras detectadas",
      "El primer campo no debe contener letras. Ingresa solo números."
    );

    resultado.value = "";
    document.getElementById("numero1").focus();
    return;
  }

  if (tieneLetras(numero2)) {
    mostrarAlerta(
      "Letras detectadas",
      "El segundo campo no debe contener letras. Ingresa solo números."
    );

    resultado.value = "";
    document.getElementById("numero2").focus();
    return;
  }

  if (!esNumeroValido(numero1)) {
    mostrarAlerta(
      "Dato incorrecto",
      "El primer campo solo debe contener números válidos."
    );

    resultado.value = "";
    document.getElementById("numero1").focus();
    return;
  }

  if (!esNumeroValido(numero2)) {
    mostrarAlerta(
      "Dato incorrecto",
      "El segundo campo solo debe contener números válidos."
    );

    resultado.value = "";
    document.getElementById("numero2").focus();
    return;
  }

  const n1 = parseFloat(numero1);
  const n2 = parseFloat(numero2);

  let resultadoOperacion;

  if (operacion === "suma") {
    resultadoOperacion = sumar(n1, n2);
  } else if (operacion === "resta") {
    resultadoOperacion = restar(n1, n2);
  } else if (operacion === "multiplicacion") {
    resultadoOperacion = multiplicar(n1, n2);
  } else if (operacion === "division") {
    resultadoOperacion = dividir(n1, n2);
  }

  if (resultadoOperacion === "Error: División por cero") {
    mostrarAlerta(
      "División incorrecta",
      "No se puede dividir entre cero."
    );

    resultado.value = "";
    document.getElementById("numero2").focus();
    return;
  }

  resultado.value = resultadoOperacion;
};

const limpiar = () => {
  document.getElementById("numero1").value = "";
  document.getElementById("numero2").value = "";
  document.getElementById("resultado").value = "";
  document.getElementById("numero1").focus();
};
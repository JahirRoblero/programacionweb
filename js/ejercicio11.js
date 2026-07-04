function calcular(event) {
    event.preventDefault();

    let valorKilometros = document.getElementById("valorKilometros").value.trim();

    if (valorKilometros == "") {
        Swal.fire({
            icon: "warning",
            title: "Campo vacío",
            text: "Por favor ingresa un valor en Kilómetros.",
            confirmButtonText: "Ok",
            confirmButtonColor: "#27b3ff",
            background: "#e6faff",
            color: "#333",
            iconColor: "#30b7ff"
        }).then(() => {
            limpiar();
        });

        return;
    }

    valorKilometros = parseFloat(valorKilometros);

    if (isNaN(valorKilometros)) {
        Swal.fire({
            icon: "warning",
            title: "Valor inválido",
            text: "Por favor ingresa solo números.",
            confirmButtonText: "Ok",
            confirmButtonColor: "#27b3ff",
            background: "#e6faff",
            color: "#333",
            iconColor: "#30b7ff"
        }).then(() => {
            limpiar();
        });

        return;
    }

    if (valorKilometros < 0) {
        Swal.fire({
            icon: "warning",
            title: "Valores negativos",
            text: "Por favor ingresa un valor positivo en Kilómetros.",
            confirmButtonText: "Ok",
            confirmButtonColor: "#27b3ff",
            background: "#e6faff",
            color: "#333",
            iconColor: "#30b7ff"
        }).then(() => {
            limpiar();
        });

        return;
    }

    let valorMillas = valorKilometros * 0.62137;

    document.getElementById("valorMillas").value = valorMillas.toFixed(2) + " Millas";
}

function limpiar() {
    document.getElementById("valorKilometros").value = "";
    document.getElementById("valorMillas").value = "";
    document.getElementById("valorKilometros").focus();
}
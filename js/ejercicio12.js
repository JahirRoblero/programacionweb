function calcular(event) {
    event.preventDefault();

    let pesosMexicanos = document.getElementById("pesosMexicanos").value.trim();

    if (pesosMexicanos === "") {
        Swal.fire({
            icon: "warning",
            title: "Campo vacío",
            text: "Por favor ingresa un valor en pesos mexicanos.",
            confirmButtonText: "Ok",
            confirmButtonColor: "#d78bff",
            background: "#fdeeff",
            color: "#333",
            iconColor: "#d78bff"
        }).then(() => {
            limpiar();
        });

        return;
    }

    pesosMexicanos = parseFloat(pesosMexicanos);

    if (isNaN(pesosMexicanos)) {
        Swal.fire({
            icon: "warning",
            title: "Valor inválido",
            text: "Por favor ingresa solo números.",
            confirmButtonText: "Ok",
            confirmButtonColor: "#d78bff",
            background: "#fdeeff",
            color: "#333",
            iconColor: "#d78bff"
        }).then(() => {
            limpiar();
        });

        return;
    }

    if (pesosMexicanos < 0) {
        Swal.fire({
            icon: "warning",
            title: "Valor negativo",
            text: "Por favor ingresa un valor positivo en pesos mexicanos.",
            confirmButtonText: "Ok",
           confirmButtonColor: "#d78bff",
            background: "#fdeeff",
            color: "#333",
            iconColor: "#d78bff"
        }).then(() => {
            limpiar();
        });

        return;
    }

    let dolares = pesosMexicanos * 0.055;

    document.getElementById("dolares").value = dolares.toFixed(2) + " USD";
}

function limpiar() {
    document.getElementById("pesosMexicanos").value = "";
    document.getElementById("dolares").value = "";
    document.getElementById("pesosMexicanos").focus();
}
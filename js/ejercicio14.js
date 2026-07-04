function calcular(event) {
    event.preventDefault();

    let cadenaNumeros = document.getElementById("arregloNumeros").value.trim();

    if (cadenaNumeros === "") {
        Swal.fire({
            icon: "warning",
            title: "Campos vacíos",
            text: "Ingresa un arreglo de números separados por comas, no se puede una coma al final.",
            confirmButtonText: "Ok",
            confirmButtonColor: "#10b981",
            background: "#f2fff0",
            color: "#333",
            iconColor: "#10b981"
        });

        limpiar();
        return;
    }

    let arreglo = cadenaNumeros.split(",");

    for (let elemento of arreglo) {
        let numero = Number(elemento.trim());

        if (elemento.trim() === "" || !Number.isFinite(numero)) {
            Swal.fire({
                icon: "warning",
                title: "Solo números",
                text: "Ingresa únicamente números separados por comas",
                confirmButtonText: "Ok",
                confirmButtonColor: "#10b981",
                background: "#ffebe6",
                color: "#333",
                iconColor: "#10b981"
            });

            limpiar();
            return;
        }
    }

    let arregloNumeros = arreglo.map(elemento => Number(elemento.trim()));

    let maximo = Math.max(...arregloNumeros);
    let minimo = Math.min(...arregloNumeros);

    let suma = arregloNumeros.reduce((acc, valor) => acc + valor, 0);
    let promedio = suma / arregloNumeros.length;

    document.getElementById("numeroMayor").value = maximo;
    document.getElementById("numeroMenor").value = minimo;
    document.getElementById("promedio").value = promedio.toFixed(2);
}

function limpiar() {
    document.getElementById("numeroMayor").value = "";
    document.getElementById("numeroMenor").value = "";
    document.getElementById("promedio").value = "";
    document.getElementById("arregloNumeros").value ="";
    document.getElementById("arregloNumeros").focus();
}
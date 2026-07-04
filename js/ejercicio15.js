let estudiantes = [];

function agregarEstudiante(event) {
    event.preventDefault();

    let nombreEstudiante = document.getElementById("nombreEstudiante").value.trim();
    let calificacionEstudiante = document.getElementById("calificacionEstudiante").value.trim();

    if (nombreEstudiante === "") {
        Swal.fire({
            icon: "warning",
            title: "Campos vacíos",
            text: "Dale un nombre al estudiante",
            confirmButtonText: "Ok",
            confirmButtonColor: "#b87333",
            background: "#fff6e6",
            color: "#333",
            iconColor: "#b87333"
        });
        return;
    }

    if (calificacionEstudiante === "") {
        Swal.fire({
            icon: "warning",
            title: "Campos vacíos",
            text: "Dale una calificación a tu estudiante",
            confirmButtonText: "Ok",
            confirmButtonColor: "#b87333",
            background: "#fff3e6",
            color: "#333",
            iconColor: "#b87333"
        });
        return;
    }

    let calificacion = Number(calificacionEstudiante);

    if (!Number.isFinite(calificacion) || calificacion < 0 || calificacion > 100) {
        Swal.fire({
            icon: "warning",
            title: "Campos incorrectos",
            text: "Agrega una calificación válida entre 0 y 100",
            confirmButtonText: "Ok",
            confirmButtonColor: "#b87333",
            background: "#fff7e6",
            color: "#333",
            iconColor: "#b87333"
        });
        return;
    }

    let estudiante = {
        nombre: nombreEstudiante,
        calificacion: calificacion
    };

    estudiantes.push(estudiante);
    limpiar();

    Swal.fire({
        icon: "success",
        title: "Agregado correctamente",
        text: "Se agregó correctamente el alumno",
        confirmButtonText: "Ok",
        confirmButtonColor: "#42ff09",
        background: "#ffffff",
        color: "#333",
        iconColor: "#42ff09"
    });
}

function calculos(event) {
    event.preventDefault();

    if (estudiantes.length === 0) {
        Swal.fire({
            icon: "warning",
            title: "Sin estudiantes",
            text: "Primero agrega al menos un estudiante",
            confirmButtonText: "Ok",
            confirmButtonColor: "#b87333",
            background: "#fff3e6",
            color: "#333",
            iconColor: "#b87333"
        });
        return;
    }

    let suma = estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0);
    let promedio = suma / estudiantes.length;

    let calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
    let calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));

    let nombresEstudiantesMaximos = estudiantes
        .filter(e => e.calificacion === calificacionMaxima)
        .map(e => e.nombre)
        .join(", ");

    let nombresEstudiantesMinimos = estudiantes
        .filter(e => e.calificacion === calificacionMinima)
        .map(e => e.nombre)
        .join(", ");

    document.getElementById("promedio").value = promedio.toFixed(2);
    document.getElementById("calificacionMaxima").value = nombresEstudiantesMaximos;
    document.getElementById("calificacionMinima").value = nombresEstudiantesMinimos;
}

function limpiar() {
    document.getElementById("nombreEstudiante").value = "";
    document.getElementById("calificacionEstudiante").value = "";
}

function reiniciar() {
    limpiar();

    document.getElementById("promedio").value = "";
    document.getElementById("calificacionMaxima").value = "";
    document.getElementById("calificacionMinima").value = "";

    estudiantes = [];
}
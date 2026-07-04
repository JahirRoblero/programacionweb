let estudiantes = [];


function agregarEstudiante(event){
    event.preventDefault();
    let nombreEstudiante=document.getElementById("nombreEstudiante").value;
    let calificacionEstudiante = document.getElementById("calificacionEstudiante").value;
    
    if(nombreEstudiante == ""){
        Swal.fire({
                icon: "warning",
                title: "Campos vacios",
                text: "Dale un nombre al estudiante",
                confirmButtonText: "Ok",
                confirmButtonColor: "#fb2525",
                background: "#ffebe6",
                color: "#333",
            });
            limpiar();
            return; 
    }

    if(calificacionEstudiante == ""){
        Swal.fire({
                icon: "warning",
                title: "Campos vacios",
                text: "Dale una calificación a tu estudiante",
                confirmButtonText: "Ok",
                confirmButtonColor: "#fb2525",
                background: "#ffebe6",
                color: "#333",
            });
            limpiar();
            return; 
    }

    if(parseInt(calificacionEstudiante) < 0){
         Swal.fire({
                icon: "warning",
                title: "Campos Incorrectos",
                text: "Agrega una calificación valida entre 0 y 100",
                confirmButtonText: "Ok",
                confirmButtonColor: "#fb2525",
                background: "#ffebe6",
                color: "#333",
            });
            limpiar();
            return; 
    }


    if(parseInt(calificacionEstudiante) > 100){
         Swal.fire({
                icon: "warning",
                title: "Campos Incorrectos",
                text: "Agrega una calificación valida entre 0 y 100",
                confirmButtonText: "Ok",
                confirmButtonColor: "#fb2525",
                background: "#ffebe6",
                color: "#333",
            });
            limpiar();
            return; 
    }

    let estudiante = {
        nombre: nombreEstudiante,
        calificacion: Number(calificacionEstudiante) 
    };

    limpiar();
    estudiantes.push(estudiante);
    Swal.fire({
                icon: "success",
                title: "Agregado correctamente",
                text: "Se agrego correctamente el alumno",
                confirmButtonText: "Ok",
                confirmButtonColor: "#42ff09",
                background: "#ffffff",
                color: "#333",
            });
            limpiar();
            return; 
}

function calculos(){
    event.preventDefault();

    let promedio = estudiantes.reduce((total, estudiante) => total + estudiante.calificacion,0)/estudiantes.length;
    
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

    document.getElementById("promedio").value = promedio;
    document.getElementById("calificacionMaxima").value =nombresEstudiantesMaximos;
    document.getElementById("calificacionMinima").value = nombresEstudiantesMinimos;
}

function limpiar(){
    document.getElementById("nombreEstudiante").value = "";
    document.getElementById("calificacionEstudiante").value ="";

}

function reiniciar(){
    limpiar();
    document.getElementById("promedio").value = promedio;
    document.getElementById("calificacionMaxima").value ="";
    document.getElementById("calificacionMinima").value = "";
    estudiantes = [];
}
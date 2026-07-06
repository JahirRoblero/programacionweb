const obtenerTareas = () => {
  const tareasGuardadas = localStorage.getItem("tareas");

  if (tareasGuardadas) {
    return JSON.parse(tareasGuardadas);
  }

  return [];
};

const guardarTareas = (tareas) => {
  localStorage.setItem("tareas", JSON.stringify(tareas));
};

const manejarTareas = () => {
  let tareas = obtenerTareas();

  const agregar = (textoTarea) => {
    const nuevaTarea = {
      tarea: textoTarea,
    };

    tareas.push(nuevaTarea);
    guardarTareas(tareas);
  };

  const eliminar = (indice) => {
    tareas.splice(indice, 1);
    guardarTareas(tareas);
  };

  const obtener = () => {
    return tareas;
  };

  return {
    agregar,
    eliminar,
    obtener,
  };
};

const gestorTareas = manejarTareas();

const renderizarTareas = () => {
  const listaTareas = document.getElementById("listaTareas");
  listaTareas.innerHTML = "";

  const tareas = gestorTareas.obtener();

  if (tareas.length === 0) {
    listaTareas.innerHTML = `
      <li class="mensaje-vacio">
        No hay tareas pendientes
      </li>
    `;
    return;
  }

  tareas.forEach((tarea, indice) => {
    const li = document.createElement("li");

    li.classList.add("tarea-item");

    li.innerHTML = `
      <span class="texto-tarea">${tarea.tarea}</span>
      <button class="boton-eliminar" type="button" onclick="eliminarTarea(${indice})">
        Eliminar
      </button>
    `;

    listaTareas.appendChild(li);
  });
};

agregarTarea = () => {
  const inputTarea = document.getElementById("tarea");
  const textoTarea = inputTarea.value.trim();

  if (textoTarea === "") {
    Swal.fire({
      icon: "warning",
      title: "Campo vacío",
      text: "Por favor escribe una tarea.",
      confirmButtonText: "Ok",
      confirmButtonColor: "#d78bff",
      background: "#f7e6ff",
      color: "#000000ff",
      iconColor: "#b833ff",
    });

    inputTarea.focus();
    return;
  }

  gestorTareas.agregar(textoTarea);
  renderizarTareas();

  Swal.fire({
    icon: "success",
    title: "Tarea guardada",
    text: "La tarea se agregó correctamente.",
    confirmButtonText: "Ok",
    confirmButtonColor: "#d78bff",
    background: "#f7e6ff",
    color: "#000000ff",
    iconColor: "#7b16d9",
  });

  inputTarea.value = "";
  inputTarea.focus();
};


eliminarTarea = (indice) => {
  Swal.fire({
    icon: "warning",
    title: "¿Eliminar tarea?",
    text: "Esta tarea se eliminará de forma permanente.",
    showCancelButton: true,
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#d78bff",
    cancelButtonColor: "#6c757d",
    background: "#f7e6ff",
    color: "#000000ff",
    iconColor: "#b833ff",
  }).then((resultado) => {
    if (resultado.isConfirmed) {
      gestorTareas.eliminar(indice);
      renderizarTareas();

      Swal.fire({
        icon: "success",
        title: "Tarea eliminada",
        text: "La tarea fue eliminada correctamente.",
        confirmButtonText: "Ok",
        confirmButtonColor: "#d78bff",
        background: "#f7e6ff",
        color: "#000000ff",
        iconColor: "#7b16d9",
      });
    }
  });
};

renderizarTareas();
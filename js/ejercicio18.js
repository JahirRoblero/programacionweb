const input = document.getElementById("nuevoElemento");
const botonAgregar = document.getElementById("agregarBtn");
const lista = document.getElementById("lista");

const agregarElemento = () => {
  const texto = input.value.trim();

  if (texto === "") {
    Swal.fire({
      icon: "warning",
      title: "Campo vacío",
      text: "Escribe algo para agregar a la lista.",
      confirmButtonText: "Ok",
      confirmButtonColor: "#0d6efd",
    });

    input.focus();
    return;
  }

  const li = document.createElement("li");

  li.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );

  const span = document.createElement("span");
  span.textContent = texto;

  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";

  botonEliminar.classList.add("btn", "btn-danger", "btn-sm");

  botonEliminar.addEventListener("click", () => {
    Swal.fire({
      icon: "warning",
      title: "¿Eliminar elemento?",
      text: "Este elemento se eliminará de la lista.",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        li.remove();

        Swal.fire({
          icon: "success",
          title: "Elemento eliminado",
          text: "El elemento fue eliminado correctamente.",
          confirmButtonText: "Ok",
          confirmButtonColor: "#0d6efd",
        });
      }
    });
  });

  li.appendChild(span);
  li.appendChild(botonEliminar);

  lista.appendChild(li);

  input.value = "";
  input.focus();
};

botonAgregar.addEventListener("click", agregarElemento);

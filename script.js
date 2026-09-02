const formulario = document.getElementById("miFormulario");
const campos = document.querySelectorAll(".validable");

let haIntentadoEnviar = false;

// Función para revisar si el campo está vacío o si el email es incorrecto
function revisarCampo(input) {
  const estaVacio = input.value.trim() === "";
  const esFormatoInvalido = !input.validity.valid;

  if (estaVacio || esFormatoInvalido) {
    return true; // Hay un error
  } else {
    // Éxito: Borde verde explícito de 2px
    input.style.border = "2px solid #81c784";
    return false; // Todo correcto
  }
}

// Escuchar los teclazos en tiempo real
campos.forEach((input) => {
  input.addEventListener("input", () => {
    if (haIntentadoEnviar) {
      const tieneError = revisarCampo(input);
      if (tieneError) {
        input.style.border = "2px solid #e57373";
      }
    }
  });
});

// Controlar el clic en el botón Enviar
formulario.addEventListener("submit", (evento) => {
  haIntentadoEnviar = true;
  let formularioTieneErrores = false;

  campos.forEach((input) => {
    const tieneError = revisarCampo(input);
    if (tieneError) {
      // Error: Borde rojo explícito de 2px
      input.style.border = "2px solid #e57373";
      formularioTieneErrores = true;
    }
  });

  if (formularioTieneErrores) {
    evento.preventDefault(); // Detiene el envío
    alert("Por favor, rellena correctamente los campos marcados en rojo.");
  }
});

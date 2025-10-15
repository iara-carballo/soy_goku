document.addEventListener("DOMContentLoaded", function() {
  const boton = document.getElementById("boton");

  boton.addEventListener("click", function() {
    mostrarMensaje("Iara aún está realizando el proyecto. Pronto habrán nuevas actualizaciones. ¡Muchas gracias!,");
  });
});

function mostrarMensaje(texto) {
  // Creo el mensaje dinámicamente
  const mensaje = document.createElement("div");
  mensaje.textContent = texto;
  mensaje.className = "mensaje";
  document.body.appendChild(mensaje);

  // Desaparece después de 15 segundos
  setTimeout(() => {
    mensaje.remove();
  }, 15000);
}

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  // Buscamos la lista con la clase exacta que le pusimos al HTML
  const navMenu = document.querySelector("nav ul.nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      // Activa o desactiva el menú al hacer clic
      navMenu.classList.toggle("active");
    });
  }
});

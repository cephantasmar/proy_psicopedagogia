document.addEventListener("DOMContentLoaded", function() {
  const logoImage1 = document.getElementById("logoImage1");
  const logoImage2 = document.getElementById("logoImage2");

  if (logoImage1) {
      logoImage1.addEventListener("click", function() {
          goToHomePage();
      });
  }

  if (logoImage2) {
      logoImage2.addEventListener("click", function() {
          goToHomePage();
      });
  }

  function goToHomePage() {
      window.location.href = "index.html"; // Cambia "index.html" por la ruta de tu página principal si es diferente
  }
});

<template>
    <div class="detalle-materia">
      <h3 class="titulo">Psicopedagogia</h3>
      <div class="descripcion">
        <p>Aquí puedes encontrar información detallada sobre la materia "Introducción a la Psicopedagogía".</p>
        <p>Esta materia es fundamental en el primer semestre y aborda temas introductorios al campo de la psicopedagogía, proporcionando una base sólida para el desarrollo futuro de la carrera.</p>
      </div>
      <div class="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/V9KRRprE8dM?feature=shared" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DetalleMateria1'
  };
  </script>
  
  <style scoped>
  .detalle-materia {
    background-color: #f9fafb;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
    max-width: 600px;
    margin-left: 20px; /* Añadido para separar del recuadro del semestre */
  }
  
  .titulo {
    color: #0565f5;
    margin-bottom: 10px;
  }
  
  .descripcion {
    margin-bottom: 20px;
  }
  
  .descripcion p {
    margin-bottom: 10px;
  }
  
  .video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* Aspect ratio 16:9 */
    overflow: hidden;
  }
  
  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
  </style>
  

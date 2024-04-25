<template>
    <footer class="contact-footer">
      <div class="contact-info">
        <h3>Contacto</h3>
        <p>Email: contacto@example.com</p>
        <p>Teléfono: +123 456 789</p>
        <p>Dirección: Calle Ejemplo, 123</p>
      </div>
      <div class="social-links">
        <h3>Redes Sociales</h3>
        <ul>
          <li><a href="https://facebook.com"><img src="facebook.png"></a></li>
          <li><a href="https://twitter.com"><img src="src/assets/icons/x.png" alt="Twitter"></a></li>
          <li><a href="https://instagram.com"><img src="src/assets/icons/instagram.jpg" alt="Instagram"></a></li>
        </ul>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'ContactFooter',
  };
  </script>
  
  <style>
  .contact-footer {
    background-color: #333;
    color: #fff;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    transition: all 0.5s ease-in-out;
  }
  
  .contact-footer:hover {
    transform: scale(1.05);
  }
  
  .contact-info, .social-links {
    flex: 1;
  }
  
  .social-links ul {
    list-style-type: none;
    padding: 0;
  }
  
  .social-links li {
    margin-bottom: 10px;
  }
  
  .social-links a img {
    width: 40px; /* Ajusta el tamaño de la imagen según tus necesidades */
    height: auto;
    transition: opacity 0.3s ease-in-out;
  }
  
  .social-links a:hover img {
    opacity: 0.7; /* Opacidad reducida al pasar el cursor sobre la imagen */
  }
  </style>
  
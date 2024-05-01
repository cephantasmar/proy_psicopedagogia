<template>
  <header>
        <img src="@/assets/img/logo_psp_1.png">
        <h1>ZONA DE APRENDIZAJE</h1>
    </header>
  <nav class="navigation">
      <a class="nav-item left">NAVEGACIÓN INTUITIVA Y CLARA
          <li>El grupo de investigación en Psicopedagogía de la Universidad Catolica se destaca por su enfoque interdisciplinario. 
            Integrando conocimientos de la psicología y la pedagogía, 
            el grupo aborda temas clave como el desarrollo cognitivo, el aprendizaje, 
            la orientación educativa, y la intervención psicopedagógica.
          </li>
          <img class="banner" id="bannersoc1" src="../assets/logo.png">
      </a>
      <a class="nav-item right">DISEÑO CENTRADO EN EL USUARIO
          <li>
            Es fundamental que el diseño del sitio web tenga en cuenta las necesidades específicas de los estudiantes de psicopedagogía. 
            Esto implica asegurarse de que la información sea fácilmente accesible, 
            que el diseño sea atractivo y fácil de usar, y que se incluyan características como foros de discusión, 
            secciones de preguntas frecuentes y enlaces a recursos útiles relacionados con la psicopedagogía.
          </li>
          <img class="banner" id="bannersoc1" src="../assets/logo.png">
      </a>
      <a class="nav-item left">ACCESIBILIDAD Y COMPATIBILIDAD
          <li>
            El sitio web debe ser accesible para todos los usuarios, incluidas aquellas personas con discapacidades visuales o motoras. 
            Además, debe ser compatible con una variedad de dispositivos y navegadores web para garantizar que los estudiantes puedan acceder al contenido desde cualquier lugar y en cualquier momento, 
            ya sea desde una computadora de escritorio, una tableta o un teléfono móvil.
          </li>
            <img class="banner" id="bannersoc1" src="../assets/logo.png">
      </a>
  </nav>
</template>

<script></script>
<style>
   header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, #027FEB, #F9EA1B);

    background-color: #027FEB;
    padding: 10px 10px 30px 10px ;
    }
    header:hover{
        background: linear-gradient(to right,#027eebf6, #f9ea1bf6);
    }
    header img{
        padding-top: 10px;
        padding-bottom: 10px;
        width: 12%;
        
    }
    header h1{
        color: white;

    }
    .navigation {
        position: relative; 
        display: flex;
        justify-content: center; 
        flex-direction: column;
        align-items: flex-start; 
        margin-top: 20px;
        margin-bottom: 20px;
        margin-right: 80px; 
        margin-left: 80px;
        width: 100%; 
    }

    .nav-item {
        padding: 20px 40px; 
        background-color: #ABCB3C;
        color: white;
        text-decoration: none;
        border-radius: 5px;
        margin: 5px 0;
        transition: background-color 0.3s ease;
        width: 100%; 
        max-width: 800px; 
        text-align: left; 
    }

    .navigation .nav-item {
        font-size: 16px; 
        font-weight: bold; 
    }

    .left {
            margin-right: auto; 
        }
    
    .right {
        margin-left: auto; 
    }
    .nav-item:hover {
        background-color: #86a029;
    }

</style>
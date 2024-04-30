<template>
  <header class="top-bar3">
      <img class="logo" id="logoImage1" src="imagenes/logo_menu3.png" alt="Logo 1">
  </header>
  <div class="title">
      <h2>Sociedad Cientifica</h2>
      <h2>¿DESDE CUANDO EXISTE EL GRUPO?</h2>
  </div>
  <nav class="navigation">
      <a class="nav-item left">
          <li>
            El grupo de investigación en Psicopedagogía de la Universidad Catolica tiene sus raíces en los esfuerzos por mejorar la calidad educativa y el bienestar psicológico de los estudiantes en el país. 
            Fue fundado en [1987] por un equipo de expertos en psicología y pedagogía, quienes reconocieron la necesidad de abordar de manera integral los desafíos que enfrentan los sistemas educativos bolivianos. La creación del grupo marcó un hito en el campo de la psicopedagogía en Bolivia, 
            al consolidar un espacio de investigación interdisciplinaria dedicado a comprender y mejorar los procesos de enseñanza-aprendizaje desde una perspectiva psicológica.
          </li>
          <img class="banner" id="bannersoc1" src="../assets/logo.png">
      </a>
      <a class="nav-item right">
          <li>
            Desde su establecimiento, el grupo ha trabajado en estrecha colaboración con instituciones educativas, organizaciones gubernamentales y la comunidad académica para desarrollar investigaciones significativas y programas de intervención efectivos. Su enfoque se centra en identificar las necesidades específicas del contexto educativo boliviano y diseñar estrategias que promuevan el desarrollo integral de los estudiantes. 
            Con el paso de los años, el grupo ha demostrado un compromiso continuo con la excelencia académica y la aplicación práctica de sus investigaciones, 
            convirtiéndose en un referente importante en el ámbito de la psicopedagogía a nivel nacional e internacional.
          </li>
          <img class="banner" id="bannersoc1" src="../assets/logo.png">
        </a>
  </nav>
  <div class="banner">
      <img src="imagenes/img_Look3.png" alt="Banner">
  </div>
</template>

<script></script>
<style>
   body {
   margin: 0;
   padding: 0;
   background-color: #0F0E1F; /* Color de fondo azul */
   display: flex;
   flex-direction: column;
}

   .top-bar {
       background-color: #027FEB; /* Color celeste */
       display: flex;
       justify-content: flex-start;
       align-items: center;
       padding: 20px 40px;
       height: 80px;
   }
   .top-bar2 {
       background-color: #F3811E; /* Color naranja */
       display: flex;
       justify-content: flex-start;
       align-items: center;
       padding: 20px 40px;
       height: 80px;
   }
   .top-bar3 {
       background-color: #F3811E; /* Color verde */
       display: flex;
       justify-content: flex-start;
       align-items: center;
       padding: 20px 40px;
       height: 80px;
   }
   .logo {
       max-width: 150px;
       margin-right: 20px;
       transition: transform 0.3s ease;
   }
   .logo:hover {
       transform: scale(1.2);
   }
   .banner {
       position: relative;
       width: 100%;
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;
   }
   .banner img {
       width: 100%;
       height: auto;
   }
   .banner-text {
       position: absolute;
       color: white;
       background-color: rgba(0, 0, 0, 0.7);
       padding: 20px;
       border-radius: 5px;
       font-size: 24px;
       z-index: 1;
   }
   
   .title {
       text-align: center;
       margin-top: 30px;
   }

  .title h2 {
    font-size: 50px;
    color: #FFFFFF;
    text-align: center;
  }

  .navigation {
    position: relative; 
    display: flex;
    justify-content: center; 
    flex-direction: column;
    align-items: center; 
    margin-top: 20px;
    margin-bottom: 20px;
    margin-right: 80px; 
    margin-left: 80px;
  }



  .nav-item {
      padding: 30px 200px;
      background-color: #05050a;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      margin: 5px 0;
      transition: background-color 0.3s ease;
      width: 100%; 
      max-width: 300px; 
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
       background-color: #0F0E1F;
   }

</style>
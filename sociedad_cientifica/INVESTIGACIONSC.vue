<template>
  <header class="top-bar3">
      <img class="logo" id="logoImage1" src="imagenes/logo_menu3.png" alt="Logo 1">
  </header>
  <div class="title">
      <h2>Sociedad Cientifica</h2>
      <h2>PRESENTE INVESTIGACION</h2>
    </div>
    <nav class="navigation">
        <a class="nav-item left">
            <li>
                La Sociedad Científica de Psicopedagogía de Bolivia (SCPBO) recientemente completó una investigación sobre "El Papel de la Psicopedagogía en la Promoción de la Inclusión Educativa". 
                Este estudio se centró en explorar cómo la psicopedagogía puede contribuir de manera significativa a la creación de entornos educativos inclusivos que atiendan las necesidades de todos los estudiantes, 
                independientemente de sus características individuales.
            </li>
            <img class="banner" id="bannersoc1" src="../assets/logo.png">
        </a>
        <a class="nav-item right">
            <li>
                El objetivo principal fue examinar las prácticas y estrategias psicopedagógicas que promueven la inclusión educativa, 
                así como identificar los desafíos y las oportunidades para su implementación en el contexto boliviano. 
                Se llevó a cabo un estudio cualitativo que incluyó entrevistas en profundidad con psicopedagogos, docentes, 
                directivos escolares y otros actores clave en el ámbito educativo.
            </li>
            <img class="banner" id="bannersoc1" src="../assets/logo.png">
          </a>
          <a class="nav-item left">
            <li>
                Los resultados de la investigación destacan la importancia de adoptar un enfoque holístico y colaborativo para promover la inclusión educativa, que incluya la formación docente en estrategias de enseñanza inclusiva, 
                la adaptación curricular para atender las necesidades individuales de los estudiantes, y la promoción de un clima escolar positivo y acogedor. 
                Además, se identificaron áreas de mejora en políticas educativas y programas de capacitación para fortalecer el papel de la psicopedagogía en la construcción de una sociedad más inclusiva y equitativa.
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
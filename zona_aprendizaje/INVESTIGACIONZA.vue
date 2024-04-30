<template>
    <header class="top-bar3">
        <img class="logo" id="logoImage1" src="imagenes/logo_menu3.png" alt="Logo 1">
    </header>
    <div class="title">
        <h2>Zona-Aprendizaje</h2>
        <h2>PRESENTE INVESTIGACION</h2>
    </div>
    <nav class="navigation">
        <a class="nav-item left">
            <li>
                La Zona de Aprendizaje ha llevado a cabo recientemente una investigación sobre "El Impacto de las Técnicas de Aprendizaje Activo en el Rendimiento Académico de Estudiantes de Psicopedagogía". 
                Este estudio se centró en evaluar cómo la implementación de técnicas de aprendizaje activo, como el aprendizaje basado en proyectos, 
                el aprendizaje colaborativo y el aprendizaje experiencial, 
                influye en el rendimiento académico de los estudiantes de psicopedagogía.
            </li>
            <img class="banner" id="bannersoc1" src="../assets/logo.png">
        </a>
        <a class="nav-item right">
            <li>
                El objetivo principal fue investigar si estas metodologías de enseñanza, que fomentan la participación activa y la construcción de conocimiento por parte de los estudiantes, 
                tienen un impacto positivo en su aprendizaje y desempeño académico. Para ello, 
                se llevó a cabo un estudio longitudinal que comparó el rendimiento de dos grupos de estudiantes de psicopedagogía: uno que recibió instrucción tradicional y otro que participó en actividades de aprendizaje activo a lo largo del semestre.
            </li>
            <img class="banner" id="bannersoc1" src="../assets/logo.png">
          </a>
          <a class="nav-item left">
            <li>
                Los resultados preliminares indican que los estudiantes que participaron en actividades de aprendizaje activo mostraron un mayor compromiso con el material de estudio, 
                una comprensión más profunda de los conceptos y un mejor rendimiento en las evaluaciones académicas en comparación con el grupo de control. 
                Estos hallazgos sugieren que la implementación de técnicas de aprendizaje activo puede ser una estrategia efectiva para mejorar el proceso de enseñanza y aprendizaje en el ámbito de la psicopedagogía.
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
         background-color: #ABCB3C; /* Color naranja */
         display: flex;
         justify-content: flex-start;
         align-items: center;
         padding: 20px 40px;
         height: 80px;
     }
     .top-bar3 {
         background-color: #ABCB3C; /* Color verde */
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
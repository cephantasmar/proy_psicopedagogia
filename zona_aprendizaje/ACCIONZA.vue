<template>
    <header class="top-bar3">
        <img class="logo" id="logoImage1" src="imagenes/logo_menu3.png" alt="Logo 1">
    </header>
    <div class="title">
        <h2>Zona-Aprendizaje</h2>
        <h2>ACCIONES INVESTIGATIVAS</h2>
    </div>
    <nav class="navigation">
        <a class="nav-item left">Estudio de Métodos de Enseñanza Efectivos: 
            <li>
                La Zona de Aprendizaje ha investigado diferentes métodos de enseñanza y su impacto en el aprendizaje de los estudiantes. 
                Esto incluye la evaluación de técnicas como el aprendizaje basado en proyectos, 
                el aprendizaje colaborativo y el uso de la tecnología en el aula.
            </li>
            <img class="banner" id="bannersoc1" src="../assets/logo.png">
        </a>
        <a class="nav-item right">Análisis del Desarrollo Cognitivo y del Aprendizaje:
            <li>
                Se han realizado investigaciones para comprender el desarrollo cognitivo y el proceso de aprendizaje en diferentes etapas de la vida. 
                Estos estudios han proporcionado información valiosa sobre cómo diseñar programas educativos más efectivos y adaptados a las necesidades individuales de los estudiantes.
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
<template>
    <header>
        <img src="@/assets/img/logo_psp_1.png">
        <h1>DATA DEL GRUPO-SOCIEDAD CIENTIFICA ESTUDIANTIL</h1>
    </header>
    <nav class="navigation">
        <a class="nav-item left">INVESTIGACIÓN INTERDISCIPLINARIA
            <li>El grupo de investigación en Psicopedagogía de la Universidad Catolica se destaca por su enfoque interdisciplinario. 
              Integrando conocimientos de la psicología y la pedagogía, 
              el grupo aborda temas clave como el desarrollo cognitivo, el aprendizaje, 
              la orientación educativa, y la intervención psicopedagógica.
            </li>
            <img class="banner" id="bannersoc1" src="../assets/logo.png">
        </a>
        <a class="nav-item right">RECOPILACIÓN Y ANÁLISIS DE DATOS 
            <li>Un aspecto fundamental del trabajo del grupo es la recopilación y análisis de datos relacionados con la psicopedagogía.
               Utilizando diversas técnicas y herramientas de investigación, 
              el equipo examina datos cualitativos y cuantitativos para comprender mejor los desafíos y las necesidades en el ámbito educativo, 
              así como para proponer estrategias de intervención efectivas.
            </li>
            <img class="banner" id="bannersoc1" src="../assets/logo.png">
        </a>
        <a class="nav-item left">APLICACIÓN PRÁCTICA EN CONTEXTO NACIONAL
            <li>La investigación desarrollada por el grupo tiene un enfoque práctico y aplicado, 
              dirigido a abordar problemáticas específicas dentro del contexto educativo boliviano. 
              Esto incluye el diseño de programas de intervención psicopedagógica adaptados a las necesidades locales, 
              así como la elaboración de recomendaciones para políticas educativas que promuevan el desarrollo integral de los estudiantes en el país.
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
        background-color: #F3811E;
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
        background-color: #c96916;
    }

</style>
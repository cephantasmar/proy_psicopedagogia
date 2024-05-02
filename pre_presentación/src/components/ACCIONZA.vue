<template>
    <header>
        <img src="@/assets/img/logo_psp_1.png">
        <h1>ZONA DE APRENDIZAJE</h1>
    </header>
    <nav class="navigation">
        <a class="nav-item left">Estudio de Métodos de Enseñanza Efectivos: 
            <li>
                La Zona de Aprendizaje ha investigado diferentes métodos de enseñanza y su impacto en el aprendizaje de los estudiantes. 
                Esto incluye la evaluación de técnicas como el aprendizaje basado en proyectos, 
                el aprendizaje colaborativo y el uso de la tecnología en el aula.
            </li>
            <img class="banner" id="bannersoc1" src="../assets/ZASC/img15.jpg">
        </a>
        <a class="nav-item right">Análisis del Desarrollo Cognitivo y del Aprendizaje:
            <li>
                Se han realizado investigaciones para comprender el desarrollo cognitivo y el proceso de aprendizaje en diferentes etapas de la vida. 
                Estos estudios han proporcionado información valiosa sobre cómo diseñar programas educativos más efectivos y adaptados a las necesidades individuales de los estudiantes.
            </li>
            <img class="banner" id="bannersoc1" src="../assets/ZASC/img10.jpg">
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
        position: relative;
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
    .banner {
        max-width: 500px; 
        height: auto;
        display: block; 
        margin: 0 auto; 
    }
</style>

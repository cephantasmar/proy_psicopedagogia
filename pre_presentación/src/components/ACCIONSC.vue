<template>
  <header>
        <img src="@/assets/img/logo_psp_1.png">
        <h1>ACCIONES INVESTIGATIVAS-SOCIEDAD CIENTIFICA ESTUDIANTIL</h1>
    </header>
  <nav class="navigation">
      <a class="nav-item left">Investigación sobre Inclusión Educativa:
          <li>
            La SCPBO ha llevado a cabo investigaciones sobre la inclusión educativa, 
            explorando las prácticas y estrategias psicopedagógicas que promueven un ambiente educativo inclusivo para todos los estudiantes, 
            especialmente aquellos con necesidades especiales.
          </li>
          <img class="banner" id="bannersoc1" src="../assets/logo.png">
      </a>
      <a class="nav-item right">Evaluación de Programas de Intervención Psicopedagógica:
          <li>
            La sociedad científica ha evaluado la efectividad de diferentes programas de intervención psicopedagógica diseñados para abordar dificultades específicas de aprendizaje 
            y promover el desarrollo integral de los estudiantes.
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
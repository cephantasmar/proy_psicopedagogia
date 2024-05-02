<template>
    <header>
        <img src="@/assets/img/logo_psp_1.png">
        <h1>INVESTIGACION-SOCIEDAD CIENTIFICA ESTUDIANTIL</h1>
    </header>
    <nav class="navigation">
        <a class="nav-item left">
            <li>
                La Sociedad Científica de Psicopedagogía de Bolivia (SCPBO) recientemente completó una investigación sobre "El Papel de la Psicopedagogía en la Promoción de la Inclusión Educativa". 
                Este estudio se centró en explorar cómo la psicopedagogía puede contribuir de manera significativa a la creación de entornos educativos inclusivos que atiendan las necesidades de todos los estudiantes, 
                independientemente de sus características individuales.
            </li>
            <img class="banner" id="bannersoc1" src="../assets/ZASC/img8.jpeg">
        </a>
        <a class="nav-item right">
            <li>
                El objetivo principal fue examinar las prácticas y estrategias psicopedagógicas que promueven la inclusión educativa, 
                así como identificar los desafíos y las oportunidades para su implementación en el contexto boliviano. 
                Se llevó a cabo un estudio cualitativo que incluyó entrevistas en profundidad con psicopedagogos, docentes, 
                directivos escolares y otros actores clave en el ámbito educativo.
            </li>
            <img class="banner" id="bannersoc1" src="../assets/ZASC/img13.jpeg">
          </a>
          <a class="nav-item left">
            <li>
                Los resultados de la investigación destacan la importancia de adoptar un enfoque holístico y colaborativo para promover la inclusión educativa, que incluya la formación docente en estrategias de enseñanza inclusiva, 
                la adaptación curricular para atender las necesidades individuales de los estudiantes, y la promoción de un clima escolar positivo y acogedor. 
                Además, se identificaron áreas de mejora en políticas educativas y programas de capacitación para fortalecer el papel de la psicopedagogía en la construcción de una sociedad más inclusiva y equitativa.
            </li>
            <img class="banner" id="bannersoc1" src="../assets/ZASC/img14.jpeg">
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
        background-color: #c96916;
    }
    .banner {
        max-width: 500px; 
        height: auto;
        display: block; 
        margin: 0 auto; 
    }
</style>

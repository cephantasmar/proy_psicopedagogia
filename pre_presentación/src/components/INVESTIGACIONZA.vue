<template>
    <header>
        <img src="@/assets/img/logo_psp_1.png">
        <h1>ZONA DE APRENDIZAJE</h1>
    </header>
    <nav class="navigation">
        <a class="nav-item left">
            <li>
                La Zona de Aprendizaje ha llevado a cabo recientemente una investigación sobre "El Impacto de las Técnicas de Aprendizaje Activo en el Rendimiento Académico de Estudiantes de Psicopedagogía". 
                Este estudio se centró en evaluar cómo la implementación de técnicas de aprendizaje activo, como el aprendizaje basado en proyectos, 
                el aprendizaje colaborativo y el aprendizaje experiencial, 
                influye en el rendimiento académico de los estudiantes de psicopedagogía.
            </li>
            <img class="banner" id="bannersoc1" src="../assets/ZASC/img14.jpeg">
        </a>
        <a class="nav-item right">
            <li>
                El objetivo principal fue investigar si estas metodologías de enseñanza, que fomentan la participación activa y la construcción de conocimiento por parte de los estudiantes, 
                tienen un impacto positivo en su aprendizaje y desempeño académico. Para ello, 
                se llevó a cabo un estudio longitudinal que comparó el rendimiento de dos grupos de estudiantes de psicopedagogía: uno que recibió instrucción tradicional y otro que participó en actividades de aprendizaje activo a lo largo del semestre.
            </li>
            <img class="banner" id="bannersoc1" src="../assets/ZASC/img15.jpg">
          </a>
          <a class="nav-item left">
            <li>
                Los resultados preliminares indican que los estudiantes que participaron en actividades de aprendizaje activo mostraron un mayor compromiso con el material de estudio, 
                una comprensión más profunda de los conceptos y un mejor rendimiento en las evaluaciones académicas en comparación con el grupo de control. 
                Estos hallazgos sugieren que la implementación de técnicas de aprendizaje activo puede ser una estrategia efectiva para mejorar el proceso de enseñanza y aprendizaje en el ámbito de la psicopedagogía.
            </li>
            <img class="banner" id="bannersoc1" src="../assets/ZASC/img16.jpeg">
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

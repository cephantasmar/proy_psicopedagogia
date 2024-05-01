<template>
  <header>
        <img src="@/assets/img/logo_psp_1.png">
        <h1>¿DESDE CUANDO EXISTE EL GRUPO?-SOCIEDAD CIENTIFICA ESTUDIANTIL</h1>
    </header>
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
<template>
  <header>
        <img src="@/assets/img/logo_psp_1.png">
        <h1>DATOS DE CONTACTOS-SOCIEDAD CIENTIFICA ESTUDIANTIL</h1>
    </header>
  <nav class="navigation">
      <a class="nav-item left">
          <li>
            Para obtener más información sobre la Sociedad Cientifica y establecer contacto con el equipo responsable, 
            puedes dirigirte a la dirección física de la institución ubicada en [DIRECCIÓN calle 2 de obrajes]. Además, 
            puedes comunicarte a través de correo electrónico a [ucb.edu.bo] o por teléfono al [6743123].
          </li>
          <img class="banner" id="bannersoc1" src="../assets/logo.png">
      </a>
      <a class="nav-item right">
          <li>
            El equipo de la Zona de Aprendizaje está disponible para atender consultas, proporcionar detalles sobre sus programas y servicios, 
            así como para colaborar en proyectos educativos y de investigación relacionados con la psicopedagogía y el aprendizaje. 
            No dudes en ponerte en contacto con ellos para obtener asesoramiento y apoyo en tus iniciativas educativas.
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
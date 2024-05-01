<template>
    <header>
        <img src="@/assets/img/logo_psp_1.png">
        <h1>VIDA UNIVERSITARIA</h1>
    </header>
    <div id="limites">
        <div class="section">
          <div class="background-image"></div>
          <div class="text-container">
            <h1 style="color:black;font-size:50px">Actividades Extracurriculares</h1>
          </div>
        </div>
        <div class="section2">
          <h2 class="section-heading2">UCB GAMES</h2>
          <div class="content">
            <div class="info">
              <p>Para confraternizar con tus compañeros de carrera y competir contra otras facultades, organizamos diferentes tipos de competencias para generar actividades de recreación. Entre estas actividades se encuentran:</p>
              <ul>
                <li>Pelota Quemada</li>
                <li>Trivia</li>
                <li>Futbol Tenis</li>
                <li>Tenis de Mesa</li>
                <li>Competencia de Canto</li>
                <li>Actividad Social</li>
                <li>Competencias Virtuales (Counter Strike, FIFA)</li>
              </ul>
              <p>¡Y mucho más!</p>
            </div>
            <div class="image-container2">
              <img src="@/assets/img/games.jpg" alt="Imagen UCB GAMES">
            </div>
          </div>
        </div>
        <div class="section3">
          <h2 class="section-heading">Torneo de Debate Estudiantil (TUDE)</h2>
          <div class="content">
            <div class="image-container3">
              <img src="@/assets/img/debate.jpg" alt="Imagen TUDE">
            </div>
            <div class="info3">
              <p>No sólo queremos encontrar al mejor grupo de debate de la Cato, sino que mediante el debate se puedan buscar solución a problemas de nuestra sociedad, ciudad y país.</p>
            </div>
          </div>
        </div>
        <!-- Las otras secciones irían aquí -->
      </div>
</template>
<style scoped>
#limites{
    padding-left: 20%;
    padding-right: 15%;
    background-color: white;
}
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
</style>
<style>
.section {
  position: relative;
  height: calc(100vh / 3); /* Una tercera parte de la altura de la pantalla */
  overflow: hidden; /* Para que el texto no se desborde */
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/fondo.jpg'); /* Ruta de tu imagen de fondo */
  background-size: cover;
  background-position: center;
  filter: blur(10px); /* Difuminado de la imagen */
}

.text-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
}

.text-container h1 {
  font-size: 3em;
  margin: 0;
}
.section2 {
  padding: 20px;
}

.section-heading2 {
  font-size: 2em;
  margin-bottom: 20px;
  color: #FFA500; /* Color azul medio */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Fuente más amena y gentil */
}

.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.info {
  flex: 1;
  padding-right: 20px;
  color: #345995; /* Color azul medio */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Fuente más amena y gentil */
}

.info p {
  margin-bottom: 10px;
}

.image-container2 {
  flex: 1;
}

.image-container2 img {
  width: 100%;
  height: auto;
  display: block;
}
.section3 {
  padding: 20px;
}

.section-heading {
  font-size: 2em;
  margin-bottom: 20px;
  color: #FFA500; /* Color azul medio */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Fuente más amena y gentil */
  text-align: right; /* Alineación a la izquierda */
}

.info3 {
  flex: 1;
  padding-left: 20px; /* Cambiado a 'padding-left' para dejar espacio a la izquierda */
  color: #345995; /* Color azul medio */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Fuente más amena y gentil */
}

.info3 p {
  margin-bottom: 10px;
}

.image-container3 {
  flex: 1;
}

.image-container3 img {
  width: 100%;
  height: auto;
  display: block;
}
</style>  


<style>
      body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
      }

      .section {
          position: relative;
          height: calc(100vh / 3); /* Una tercera parte de la altura de la pantalla */
          overflow: hidden; /* Para que el texto no se desborde */
      }

      .background-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('@/assets/fondo.jpg'); /* Ruta de tu imagen de fondo */
          background-size: cover;
          background-position: center;
          filter: blur(10px); /* Difuminado de la imagen */
      }

      .text-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          text-align: center;
      }

      .text-container h1 {
          font-size: 3em;
          margin: 0;
      }
      .section2 {
          padding: 20px;
      }

      .section-heading2 {
          font-size: 2em;
          margin-bottom: 20px;
          color: #FFA500; /* Color azul medio */
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Fuente más amena y gentil */
      }

      .content {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
      }

      .info {
          flex: 1;
          padding-right: 20px;
          color: #345995; /* Color azul medio */
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Fuente más amena y gentil */
      }

      .info p {
          margin-bottom: 10px;
      }

      .image-container2 {
          flex: 1;
      }

      .image-container2 img {
          width: 100%;
          height: auto;
          display: block;
      }
      .section3 {
          padding: 20px;
      }

      .section-heading {
          font-size: 2em;
          margin-bottom: 20px;
          color: #FFA500; /* Color azul medio */
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Fuente más amena y gentil */
          text-align: right; /* Alineación a la izquierda */
      }

      .content {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
      }

      .info3 {
          flex: 1;
          padding-left: 20px; /* Cambiado a 'padding-left' para dejar espacio a la izquierda */
          color: #345995; /* Color azul medio */
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Fuente más amena y gentil */
      }

      .info3 p {
          margin-bottom: 10px;
      }

      .image-container3 {
          flex: 1;
      }

      .image-container3 img {
          width: 100%;
          height: auto;
          display: block;
      }
  </style>

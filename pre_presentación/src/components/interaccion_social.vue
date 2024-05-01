<template>
    <header>
        <img src="@/assets/img/logo_psp_1.png">
        <h1>INTERACCIÓN SOCIAL</h1>
    </header>
    <div id="cont">
      <div class="section">
        <div class="background-image"></div>
        <div class="text-container">
          <h1>Trabajo con obras</h1>
        </div>
      </div>
  
      <div class="wpb_column vc_column_container vc_col-sm-4">
        <div class="vc_column-inner">
          <div class="wpb_wrapper">
            <div class="indicadorBox">
              <div class="numIcono-indicadorBox">
                <img decoding="async" src="https://www.ucb.edu.bo/wp-content/uploads/2019/12/indicador.png" class="img-indicadorBox">
              </div>
              <p class="num-indicadorBox">100</p>
              <h4>Obras de la Iglesia apoyadas</h4>
            </div>
          </div>
        </div>
      </div>
  
      <div class="wpb_column vc_column_container vc_col-sm-4">
        <div class="vc_column-inner">
          <div class="wpb_wrapper">
            <div class="indicadorBox">
              <div class="numIcono-indicadorBox">
                <img decoding="async" src="https://www.ucb.edu.bo/wp-content/uploads/2019/12/indicador.png" class="img-indicadorBox">
              </div>
              <p class="num-indicadorBox">5</p>
              <h4>Materias de formación humano cristianas transversales</h4>
            </div>
          </div>
        </div>
      </div>
  
      <div class="wpb_column vc_column_container vc_col-sm-4">
        <div class="vc_column-inner">
          <div class="wpb_wrapper">
            <div class="indicadorBox">
              <div class="numIcono-indicadorBox">
                <img decoding="async" src="https://www.ucb.edu.bo/wp-content/uploads/2019/12/indicador.png" class="img-indicadorBox">
              </div>
              <p class="num-indicadorBox">4</p>
              <h4>Pastorales regionales</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<style scoped>
#cont{
  background-color: white;
}
#cont h1{
  color: gray;
  font-size: 45 px;
}
.text-container {
  font-size: 2em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
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
  background-image: url('@/assets/cru.jpg'); /* Ruta de tu imagen de fondo */
  background-size: cover;
  background-position: center;
  filter: blur(10px); /* Difuminado de la imagen */
}
.indicadorBox .numIcono-indicadorBox {
  width: 166px;
  height: 166px;
  border: 4px solid #10e909;
  border-radius: 200px;
  margin: 0 auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  overflow: hidden;
  transition: transform ease-in .2s;
}
.indicadorBox .num-indicadorBox {
  font-size: 4rem;
  font-family: Lato;
  font-weight: 700;
  color: #ffae00;
  line-height: 1.2;
  margin-bottom: 0;
  width: 100%;
  background-color: #fff;
  text-align: center;
  left: 0;
  margin-top: -48px;
  z-index: 10;
  position: relative;
  transition: color ease-in .1s;
}
.indicadorBox h4 {
  font-size: 1.6rem;
  margin-top: 0;
  color: #ffae00;
}
.indicadorBox {
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  position: relative;
}
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

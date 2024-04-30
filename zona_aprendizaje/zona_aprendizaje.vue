<template>
    <header class="top-bar3">
         <img class="logo"  id="logoImage1" src="imagenes/logo_menu3.png" alt="Logo 1" >
     </header>
     <div class="title">
         <h2>Centro de investigaciones</h2>
         <h2>Sociedad Científica Estudiantil  PSICOPEDAGOGIA</h2>
     </div>
     <div class="banner">
         <img src="imagenes/img_Look3.png" alt="Banner">
         
     </div>
  
    
  
     <nav class="navigation">
         <a class="nav-item left">DATA DEL GRUPO
          <li>Aqui se mostra los que es el como es el grupo tal cual</li>
         </a>
         <a class="nav-item right">¿DESDE CUANDO EXISTE EL GRUPO?
          <li>Aqui se mostra los datos de la existencia del grupo</li>
         </a>
         <a class="nav-item left">ACCIONES INVESTIGATIVAS
          <li> Aqui se mostra nuestras acciones de investigacion</li>
         </a>
         <a class="nav-item right">DATOS DEL CONTACTO
          <li> Aqui se mostra los contactos</li>
         </a>
         <a class="nav-item left">PRESENTE INVESTIGACION
          <li> Aqui se mostra la presente investigacion </li>
         </a>
     </nav>
     
  </template>
  <script>
  
  </script>
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
         background-color: #F3811E; /* Color naranja */
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
     .outside-buttons {
         display: flex;
         justify-content: space-between;
         width: 80%;
         margin: 20px auto 0; 
     }
     .button {
         display: flex;
         align-items: center;
         padding: 80px 80px; 
         border-radius: 8px;
         text-decoration: none;
         color: white;
         cursor: pointer;
         transition: background-color 0.3s ease;
     }
     .left-button {
         background-color: #0F0E1F;
         font-size: 80px; 
         font-weight: bold; 
     }
     .right-button {
         background-color: rgb(102, 87, 0);
     }
     .button img {
         width: 300px; 
         height: 300px;
         margin-right: 15px; 
     }
  
     .button:hover {
         background-color: rgba(255, 255, 255, 0.2);
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
         display: flex;
         flex-direction: column; 
         align-items: center; 
         margin-top: 20px;
     }
  
     .nav-item {
         padding: 30px 50px;
         background-color: #027FEB;
         color: white;
         text-decoration: none;
         border-radius: 50px;
         margin: 5px 0; 
         transition: background-color 0.3s ease;
     }
  
     .left {
         margin-right: auto; 
     }
  
     .right {
         margin-left: auto; 
     }
  
     .nav-item:hover {
         background-color: #027FEB;
     }
  </style>

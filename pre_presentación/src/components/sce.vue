<template>
    <header>
        <img src="@/assets/img/logo_psp_1.png">
        <h1>SOCIEDAD CIENTIFICA ESTUDIANTIL</h1>
    </header>
    <nav class="navigation">
        <router-link class="nav-item left" to="/grupoSC">DATA DEL GRUPO Y CONTACTOS</router-link>
        <router-link class="nav-item right" to="/EXISTENCIASC">¿DESDE CUANDO EXISTE EL GRUPO?</router-link>
        <router-link class="nav-item left" to="/ACCIONSC">ACCIONES INVESTIGATIVAS</router-link>
        <router-link class="nav-item right" to="/INVESTIGACIONSC">PRESENTE INVESTIGACION</router-link>
    </nav>
</template>
<style scoped>
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
         display: flex;
         flex-direction: column; 
         align-items: center; 
         margin-top: 20px;
         margin-bottom: 20px;
         margin-right: 80px; 
         margin-left: 80px;
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
         background-color: #F3811E;
     }
</style>

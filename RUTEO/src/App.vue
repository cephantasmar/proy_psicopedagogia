<script setup>
import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
import './assets/style.css'

import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"

</script>

<template>
  <div id="app"> 
  <body>
    <div class="menu">
      <ion-icon name="menu-outline"></ion-icon>
      <ion-icon name="close-outline"></ion-icon>
  </div>
<!--BARRA DESPLEGABLE MENU-->
  <div class="barra-lateral">
      <div>
          <div class="nombre-pagina">
              <img src="@/assets/img/logo.png" id="cloud" name="cloud-outline" class="logo_img"  />
              <span>UCB PSICOPEDAGOGIA</span>

          </div>

      </div>
      <nav class="navegacion">
        <ul class="dropdown" id="menu">
            <li>
                <a id="inbox" href="#">
                    <ion-icon name="home-outline"></ion-icon>
                    <span>Inicio</span>
                </a>
            </li>
            <!------------------------------------------------->
            <li class="dropdown__list">
                <a href="#" class="dropdown__link">
                    <ion-icon name="star-outline"></ion-icon>
                    <span>Formacion</span>
                    <img src="@/assets/arrow.svg" class="dropdown__arrow">

                    <input type="checkbox" class="dropdown__check">
                </a>

                <div class="dropdown__content">
                    <ul class="dropdown__sub">
                        <li class="dropdown__li">
                            
                            <router-link class="dropdown__anchor" to="/malla">PREGARADO</router-link>
                        </li>
                        <li class="dropdown__li">
                          
                            <router-link class="dropdown__anchor" to="/postgrado">POSTGRADO</router-link>
                        </li>
                        <li class="dropdown__li">
                            <router-link class="dropdown__anchor" to="/formacion_continua">FORMACION CONTINUA</router-link>

                        </li>
                    </ul>
                </div>
            
            </li>
            <!------------------------------------------------->
            <li class="dropdown__list">
                <a href="#"  class="dropdown__link">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <span>Investigacion</span>
                    <img src="@/assets/arrow.svg" class="dropdown__arrow">
                    
                    <input type="checkbox" class="dropdown__check">
                </a>
                <div class="dropdown__content">
                    <ul class="dropdown__sub">
                        <li class="dropdown__li">
                            <router-link class="dropdown__anchor" to="/centro_investigaciones">CENTRO DE INVESTIGACIONES</router-link>

                        </li>
                        <li class="dropdown__li">
                            <router-link class="dropdown__anchor" to="/sce">SOCIEDAD CIENTIFICA ENTUDIANTIL</router-link>

                        </li>

                    </ul>
                </div>
            </li>
            <!------------------------------------------------->
            <li>
                <a href="#">
                    <ion-icon name="document-text-outline"></ion-icon>
                    <router-link class="dropdown__anchor" to="/interaccion_social">Interaccion social</router-link>

                </a>
            </li>
            <li>
                <a href="#">
                    <ion-icon name="bookmark-outline"></ion-icon>
                    <router-link class="dropdown__anchor" to="/vida_universitaria">Vida universitaria</router-link>

                </a>
            </li>
        </ul>
    </nav>
    <div>
  </div>
</div>

  </body>
</div>
  <router-view> </router-view>

</template>


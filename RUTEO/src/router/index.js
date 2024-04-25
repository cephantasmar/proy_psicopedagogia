import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import malla from '@/components/malla.vue'
import MallaCurricular from '../components/MallaCurricular.vue'
import MateriaComponent from '../components/MateriaComponent.vue'
import SemestreComponent from '../components/SemestreComponent.vue'
import centro_investigaciones from '../components/centro_investigaciones.vue'
import formacion_continua from '../components/formacion_continua.vue'

import interaccion_social from '../components/interaccion_social.vue'

import postgrado from '../components/postgrado.vue'
import sce from '../components/sce.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/malla',
      name: 'malla',
      component: malla
    }
    ,
    { path: '/MallaCurricular', component: MallaCurricular },
    { path: '/semestre/:id', component: SemestreComponent },
    { path: '/materia/:id', component: MateriaComponent },
    { path: '/centro_investigaciones', component: centro_investigaciones }, 
    { path: '/formacion_continua', component: formacion_continua },
    { path: '/interaccion_social', component: interaccion_social },
    { path: '/postgrado', component: postgrado },
    { path: '/sce', component: sce }
    
    

  ]
  
})

export default router

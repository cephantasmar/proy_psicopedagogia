import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import malla from '@/components/malla.vue'
import MallaCurricular from '../components/MallaCurricular.vue'
import MateriaComponent from '../components/MateriaComponent.vue'
import SemestreComponent from '../components/SemestreComponent.vue'
import centro_investigaciones from '../components/centro_investigaciones.vue'
import formacion_continua from '../components/formacion_continua.vue'

import grupoSC from '@/components/grupoSC.vue'
import ACCIONSC from '@/components/ACCIONSC.vue'
import EXISTENCIASC from '@/components/EXISTENCIASC.vue'
import INVESTIGACIONSC from '@/components/INVESTIGACIONSC.vue'

import grupoZA from '@/components/grupoZA.vue'
import ACCIONZA from '@/components/ACCIONZA.vue'
import EXISTENCIAZA from '@/components/EXISTENCIAZA.vue'
import INVESTIGACIONZA from '@/components/INVESTIGACIONZA.vue'

import interaccion_social from '../components/interaccion_social.vue'

import postgrado from '../components/postgrado.vue'
import sce from '../components/sce.vue'
import vida_universitaria from '@/components/vida_universitaria.vue'
import administrador from '@/components/administrador.vue'
import gui_administrador from '@/components/gui_administrador.vue'

import home from '@/components/home.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
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
    { path: '/vida_universitaria', component: vida_universitaria },

    { path: '/sce', component: sce },
    { path: '/administrador', component: administrador },
    { path: '/gui_administrador', component: gui_administrador },
    
    {
      path: '/grupoSC',
      name: 'grupoSC',
      component: grupoSC
    },
    {
      path: '/ACCIONSC',
      name: 'ACCIONSC',
      component: ACCIONSC
    },
    {
      path: '/EXISTENCIASC',
      name: 'EXISTENCIASC',
      component: EXISTENCIASC
    },
    {
      path: '/INVESTIGACIONSC',
      name: 'INVESTIGACIONSC',
      component: INVESTIGACIONSC
    },
    
    {
      path: '/grupoZA',
      name: 'grupoZA',
      component: grupoZA
    },
    {
      path: '/ACCIONZA',
      name: 'ACCIONZA',
      component: ACCIONZA
    },
    {
      path: '/EXISTENCIAZA',
      name: 'EXISTENCIAZA',
      component: EXISTENCIAZA
    },
    {
      path: '/INVESTIGACIONZA',
      name: 'INVESTIGACIONZA',
      component: INVESTIGACIONZA
    },
  ]
  
})

export default router

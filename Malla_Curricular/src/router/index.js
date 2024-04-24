import { createRouter, createWebHistory } from 'vue-router';
import MallaCurricular from '../components/MallaCurricular.vue';
import SemestreComponent from '../components/SemestreComponent.vue';
import MateriaComponent from '../components/MateriaComponent.vue';

const routes = [
  { path: '/', component: MallaCurricular },
  { path: '/semestre/:id', component: SemestreComponent },
  { path: '/materia/:id', component: MateriaComponent }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

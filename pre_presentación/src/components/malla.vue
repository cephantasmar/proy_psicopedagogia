<template>
  <div id="app">
    <header>
      <img src="@/assets/img/logo_psp_1.png">
      <h1>PREGRADO</h1>
    </header>
    
    <main>
      <div class="malla-curricular">
        <h2>Malla curricular</h2>
        <div class="semestres-grid">
          <router-link v-for="semestre in semestres" :key="semestre.id" :to="'/semestre/' + semestre.id" class="semestre" @click="mostrarRecuadro(semestre)">
            {{ semestre.nombre }}
          </router-link>
        </div>
      </div>
      <div class="contenedor-detalle">
        <div v-if="recuadroVisible" class="recuadro-flotante">
          <h3>{{ recuadroContenido.nombre }}</h3>
          <p>{{ recuadroContenido.descripcion }}</p>
          <ul v-if="recuadroContenido.materias">
            <li v-for="materia in recuadroContenido.materias" :key="materia">
              <span v-if="materia === 'Psicopedagogia'" @click="mostrarDetalleMateria1">{{ materia }}</span>
              <span v-else>{{ materia }}</span>
            </li>
          </ul>
        </div>
        <DetalleMateria1 v-if="detalleMateria1Visible" class="detalle-materia" />
      </div>
    </main>
  </div>
</template>
<script>
import DetalleMateria1 from '../components/DetalleMateria1.vue';

export default {
  name: 'App',
  components: {
    DetalleMateria1
  },
  data() {
    return {
      semestres: [
        { id: 1, nombre: 'Primer Semestre', descripcion: 'Este es el primer semestre del plan de estudios. Incluye asignaturas introductorias.', materias: ['Psicopedagogia', 'Modelos Pedagógicos en elTiempo y la Actualidad', 'Aprender a Aprende', 'Psicofisiología', 'Antropología Cultural de la Identidad', 'Escritura Académica'] },
        { id: 2, nombre: 'Segundo Semestre', descripcion: 'Este es el segundo semestre del plan de estudios. Continúa con asignaturas básicas.' },
        { id: 3, nombre: 'Tercer Semestre', descripcion: 'Este es el tercer semestre del plan de estudios. Se enfoca en asignaturas intermedias.' },
        { id: 4, nombre: 'Cuarto Semestre', descripcion: 'Este es el cuarto semestre del plan de estudios. Se profundiza en áreas específicas.' },
        { id: 5, nombre: 'Quinto Semestre', descripcion: 'Este es el quinto semestre del plan de estudios. Incluye asignaturas optativas.' },
        { id: 6, nombre: 'Sexto Semestre', descripcion: 'Este es el sexto semestre del plan de estudios. Se enfoca en proyectos o prácticas profesionales.' },
        { id: 7, nombre: 'Séptimo Semestre', descripcion: 'Este es el séptimo semestre del plan de estudios. Continúa con proyectos o prácticas profesionales.' },
        { id: 8, nombre: 'Octavo Semestre', descripcion: 'Este es el octavo semestre del plan de estudios. Se prepara para la culminación de la carrera.' },
        { id: 9, nombre: 'Noveno Semestre', descripcion: 'Este es el noveno semestre del plan de estudios. Incluye trabajo de grado o proyecto final.' }
      ],
      recuadroVisible: false,
      recuadroContenido: null,
      detalleMateria1Visible: false
    };
  },
  methods: {
    mostrarRecuadro(semestre) {
      if (semestre.id === 1) {
        this.recuadroContenido = semestre;
        this.recuadroVisible = true;
        this.detalleMateria1Visible = false; // Ocultar detalle de materia al mostrar el recuadro del semestre
      } else {
        this.recuadroVisible = false;
      }
    },
    mostrarDetalleMateria1() {
      this.detalleMateria1Visible = true;
    }
  }
};
</script>
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


/* Estilos para el resto del contenido */
main {
  padding: 20px;
}

.malla-curricular {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 5%;
}

h2 {
  color: #333;
  margin-bottom: 20px;
}

.semestres-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.semestre {
  background-color: #0565f5;
  color: #fff;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s;
}

.semestre:hover {
  background-color: #5170d3;
  transform: translateY(-4px);

}

/* Estilos para el contenedor de detalle */
.contenedor-detalle {
  display: flex;
}

/* Estilos para el recuadro flotante */
.recuadro-flotante {
  position: relative;
  background-color: #f9fafb;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  margin-right: 20px; 
  font-size: 14px;
}

.recuadro-flotante h3 {
  color: #0565f5;
}

.recuadro-flotante p {
  color: #333;
}

/* Estilos para el detalle de materia */
.detalle-materia {
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  font-size: 14px;
  max-width: 400px;
}
</style>

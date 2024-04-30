<template>
  <div id="app">
    <header>
      <div class="logo-container">
        <img src="./assets/logop.png" alt="Logo" class="logo">
      </div>
      <div class="header-content">
        <h1>Malla Curricular</h1>
        <p>Explora nuestra oferta académica</p>
      </div>
    </header>
    <main>
      <div class="malla-curricular">
        <h2>Anexo de Semestres</h2>
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
import DetalleMateria1 from './components/DetalleMateria1.vue';

export default {
  name: 'App',
  components: {
    DetalleMateria1
  },
  data() {
    return {
      semestres: [
        { id: 1, nombre: 'Primer Semestre', descripcion: 'Este es el primer semestre del plan de estudios. Incluye asignaturas introductorias.', materias: ['Psicopedagogia', 'Modelos Pedagógicos en elTiempo y la Actualidad', 'Aprender a Aprende', 'Psicofisiología', 'Antropología Cultural de la Identidad', 'Escritura Académica'] },
        { id: 2, nombre: 'Segundo Semestre', descripcion: 'Este es el segundo semestre del plan de estudios. Continúa con asignaturas básicas.', materias: ['Psicología del Desarrollo Infantil','Taller de Psicología del Desarrollo Infantil','Didáctica Formal y No Formal','Psicobiología y Neurociencia','Desarrollo Personal y Creativo','Psicoestadística','Psicología Educativa y del Aprendizaje'] },
        { id: 3, nombre: 'Tercer Semestre', descripcion: 'Este es el tercer semestre del plan de estudios. Se enfoca en asignaturas intermedias.', materias:['Psicología del Desarrollo del Adolescente y Adulto','Taller de Psicología del Desarrollo del Adolescente y Adulto ','Taller de Tecnologías de la Información y Comunicación','Didácticas Especificas','Elaboración y Validación de Instrumentos de Medición','Psicología Cognitiva','Formación Humano Cristiana I'] },
        { id: 4, nombre: 'Cuarto Semestre', descripcion: 'Este es el cuarto semestre del plan de estudios. Se profundiza en áreas específicas.', materias:['Procesos Cognitivos en Educación','Gestión de Aula e Inteligencia Emocional','Educación y Tecnología','Medición en Psicología (Taller)','Técnicas de Evaluación Psicopedagógica','Investigación Cuantitativa','Educación Inclusiva']},
        { id: 5, nombre: 'Quinto Semestre', descripcion: 'Este es el quinto semestre del plan de estudios. Incluye asignaturas optativas.', materias:['Diseño Curricular I','Aprendizaje en Entornos Virtuales','Intervención Psicoped en Necesidades Educativas','Diagnósticos Psicopedagógicos','Diagnóstico de Necesidades de Formación Social','Educacion en la Diversidad','Educacion Cualitativa']},
        { id: 6, nombre: 'Sexto Semestre', descripcion: 'Este es el sexto semestre del plan de estudios. Se enfoca en proyectos o prácticas profesionales.', materias:['Producción de Recursos Psicopedagógicos','Diseño Curricular II','Proyectos Psicopedagógicos Institucionales','Intervención Psicoped. en Dificultades del Aprendizaje','Investigación Acción','Formación Humano Cristiana II','Libre I']},
        { id: 7, nombre: 'Séptimo Semestre', descripcion: 'Este es el séptimo semestre del plan de estudios. Continúa con proyectos o prácticas profesionales.', materias:['Evaluación Educativa','Intervención Psicoped. en Dificultades Específicas del Aprendizaje','Psicopedagogía Laboral','Intervención Psicoped. en Contextos de Vulnerabilidad','Práctica Preprofesional I','Formación Humano Cristiana III','Enseñar a Aprender']},
        { id: 8, nombre: 'Octavo Semestre', descripcion: 'Este es el octavo semestre del plan de estudios. Se prepara para la culminación de la carrera.', materias:['Intervención en Familia y Comunidad','Gestión del Aprendizaje en Contexto Laboral','Práctica Preprofesional II','Taller de Investigación de Grado I','Libre II','Orientación Profesional']},
        { id: 9, nombre: 'Noveno Semestre', descripcion: 'Este es el noveno semestre del plan de estudios. Incluye trabajo de grado o proyecto final.', materias:['Taller de Investigación de Grado II']}
      ],
      recuadroVisible: false,
      recuadroContenido: null,
      detalleMateria1Visible: false
    };
  },
  methods: {
    mostrarRecuadro(semestre) {
      this.recuadroContenido = semestre;
      this.recuadroVisible = true;
      this.detalleMateria1Visible = false; // Ocultar detalle de materia al mostrar el recuadro del semestre
    },
    mostrarDetalleMateria1() {
      this.detalleMateria1Visible = true;
    }
  }
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #FFD700; 
}

header {
  background: linear-gradient(45deg, #ffcc00, #ff7300);
  color: #fff;
  padding: 20px 0;
  display: flex;
  align-items: center;
}

.logo-container {
  margin-right: 40px;
  margin-left: 40px;
}

.logo {
  width: 180px;
  height: auto;
}

.header-content {
  flex-grow: 1;
  text-align: center;
  width: calc(100% - 250px);
  margin-left: -300px;
}

header h1 {
  margin: 0;
  font-size: 32px;
}

header p {
  margin: 5px 0 0;
}

main {
  padding: 20px;
}

.malla-curricular {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
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
}

.contenedor-detalle {
  display: flex;
}

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

.detalle-materia {
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  font-size: 14px;
  max-width: 400px;
}
</style>

<template>
  <div id="app">
    <header>
      <img src="/assets/logop.png" alt="Logo" class="logo">
      <h1>Malla Curricular</h1>
    </header>
    <main>
      <div class="malla-curricular">
        <h2>Anexo de Semestres</h2>
        <div class="columnas">
          <div class="columna" v-for="(columna, index) in columnas" :key="index">
            <div class="semestres">
              <router-link v-for="semestre in columna" :key="semestre.id" :to="'/semestre/' + semestre.id" class="semestre" @mouseover="mostrarRecuadro(semestre.descripcion)" @mouseleave="ocultarRecuadro">
                {{ semestre.nombre }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div v-if="recuadroVisible" class="recuadro-flotante">
        <p>{{ recuadroContenido }}</p>
      </div>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      semestres: [
        { id: 1, nombre: 'Primer Semestre', descripcion: 'Este es el primer semestre del plan de estudios. Incluye asignaturas introductorias.' },
        { id: 2, nombre: 'Segundo Semestre', descripcion: 'Este es el segundo semestre del plan de estudios. Continúa con asignaturas básicas.' },
        { id: 3, nombre: 'Tercer Semestre', descripcion: 'Este es el tercer semestre del plan de estudios. Se enfoca en asignaturas intermedias.' },
        { id: 4, nombre: 'Cuarto Semestre', descripcion: 'Este es el cuarto semestre del plan de estudios. Se profundiza en áreas específicas.' },
        { id: 5, nombre: 'Quinto Semestre', descripcion: 'Este es el quinto semestre del plan de estudios. Incluye asignaturas optativas.' },
        { id: 6, nombre: 'Sexto Semestre', descripcion: 'Este es el sexto semestre del plan de estudios. Se enfoca en proyectos o prácticas profesionales.' },
        { id: 7, nombre: 'Septimo Semestre', descripcion: 'Este es el séptimo semestre del plan de estudios. Continúa con proyectos o prácticas profesionales.' },
        { id: 8, nombre: 'Octavo Semestre', descripcion: 'Este es el octavo semestre del plan de estudios. Se prepara para la culminación de la carrera.' },
        { id: 9, nombre: 'Noveno Semestre', descripcion: 'Este es el noveno semestre del plan de estudios. Incluye trabajo de grado o proyecto final.' },
      ],
      recuadroVisible: false,
      recuadroContenido: ''
    };
  },
  computed: {
    columnas() {
      const columnas = [[], [], []];
      this.semestres.forEach((semestre, index) => {
        const columnaIndex = index % 3;
        columnas[columnaIndex].push(semestre);
      });
      return columnas;
    }
  },
  methods: {
    mostrarRecuadro(contenido) {
      this.recuadroContenido = contenido;
      this.recuadroVisible = true;
    },
    ocultarRecuadro() {
      this.recuadroVisible = false;
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
  background-color: #f09c64;
  color: #000000;
  padding: 20px 0;
  text-align: center;
  display: flex;
  align-items: center;
}

.logo {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

header h1 {
  margin: 0;
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

.columnas {
  display: flex;
  gap: 20px; 
}

.columna {
  flex: 1;
}

.semestres {
  display: flex;
  flex-direction: column;
}

.semestre {
  background-color: #0565f5;
  color: #00ff2a;
  border-radius: 10px; 
  padding: 20px;
  margin-bottom: 20px; 
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s;
}

.semestre:hover {
  background-color: #5170d3;
}

.recuadro-flotante {
  position: absolute;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 400px;
  text-align: left;
  font-size: 14px;
}
</style>

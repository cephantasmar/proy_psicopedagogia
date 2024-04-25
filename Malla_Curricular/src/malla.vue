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
              <router-link v-for="semestre in columna" :key="semestre.id" :to="'/semestre/' + semestre.id" class="semestre">
                {{ semestre.nombre }}
              </router-link>
            </div>
          </div>
        </div>
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
        { id: 1, nombre: 'Primer Semestre' },
        { id: 2, nombre: 'Segundo Semestre' },
        { id: 3, nombre: 'Tercer Semestre' },
        { id: 4, nombre: 'Cuarto Semestre' },
        { id: 5, nombre: 'Quinto Semestre' },
        { id: 6, nombre: 'Sexto Semestre' },
        { id: 7, nombre: 'Septimo Semestre' },
        { id: 8, nombre: 'Octavo Semestre' },
        { id: 9, nombre: 'Noveno Semestre' },
      ]
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
  created() {
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
</style>

<template>
    <div class="malla-curricular">
      <h2>Malla Curricular</h2>
      <div class="semestres">
        <router-link v-for="semestre in semestres" :key="semestre.id" :to="'/semestre/' + semestre.id" class="semestre">
          {{ semestre.nombre }}
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MallaCurricular',
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
    }
  };
  </script>
  
  <style scoped>

  .semestres {
    display: flex;
    flex-wrap: wrap;
  }
  
  .semestre {
    background-color: #05f505;
    color: #2b3075;
    border-radius: 10px;
    padding: 10px 20px;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.3s;
    margin: 10px;
  }
  
  .semestre:hover {
    background-color: #5170d3;
  }
  </style>
  

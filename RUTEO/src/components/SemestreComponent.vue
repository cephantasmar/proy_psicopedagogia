<template>
  <div class="semestre-component">
    <h2>{{ nombreSemestre }}</h2>
    <div class="materias">
      <router-link v-for="materia in materias" :key="materia.id" :to="'/materia/' + materia.id" class="materia">
        {{ materia.nombre }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SemestreComponent',
  data() {
    return {
      nombreSemestre: '',
      materias: [
        { id: 1, nombre: 'Materia 1' },
        { id: 2, nombre: 'Materia 2' },
        { id: 3, nombre: 'Materia 3' },
        { id: 4, nombre: 'Materia 4' },
        { id: 5, nombre: 'Materia 5' },
      ]
    };
  },
  created() {
    const semestreId = this.$route.params.id;
    this.nombreSemestre = `Semestre ${semestreId}`;
  }
};
</script>

<style scoped>

.materias {
  margin-top: 20px;
}

.materia {
  background-color: #ffd700;
  color: #2b3075;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s;
  margin-right: 10px;
  margin-bottom: 10px;
}

.materia:hover {
  background-color: #c9c62a;
}
</style>

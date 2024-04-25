<template>
  <div class="materia-component">
    <h2>{{ nombreMateria }}</h2>
    <p>Contenido de la materia {{ materiaId }}</p>
  </div>
</template>

<script>
export default {
  name: 'MateriaComponent',
  data() {
    return {
      nombreMateria: '',
      materiaId: null
    };
  },
  created() {
    this.materiaId = this.$route.params.id;
    this.nombreMateria = `Materia ${this.materiaId}`;
  }
};
</script>

<style scoped>

.materia-component {
  background-color: #ffd700;
  color: #2b3075;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
}
</style>

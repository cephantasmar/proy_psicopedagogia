<template>
  <div id="centrar"> 
    <div class="materia-component">
      <h2>{{ nombreMateria }}</h2>
      <p>Contenido de la materia {{ materiaId }}</p>
      <div class="detalle-materia">
        <h3 class="titulo">Psicopedagogia</h3>
        <div class="descripcion">
          <p>Aquí puedes encontrar información detallada sobre la materia "Introducción a la Psicopedagogía".</p>
          <p>Esta materia es fundamental en el primer semestre y aborda temas introductorios al campo de la psicopedagogía, proporcionando una base sólida para el desarrollo futuro de la carrera.</p>
        </div>
        <div class="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/V9KRRprE8dM?feature=shared" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
      <DetalleMateria1/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MateriaComponent',
  data() {
    return {
      nombreMateria: 'Psicopedagogia',
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
#centrar{
  padding-left: 9%;
  padding-right: 5%;
  padding-top: 5%;
}
.materia-component {
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  background-color: #ffd700;
  color: #2b3075;
  border-radius: 10px;
  padding: 20px;
  margin-top: 0px;
}
</style>

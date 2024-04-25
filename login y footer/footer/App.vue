<template>
  <div id="app">
    <ContactPage />
    <ContactFooter />
  </div>
</template>

<script>
import ContactPage from './components/ContactPage.vue';
import ContactFooter from './components/ContactFooter.vue';

export default {
  name: 'App',
  components: {
    ContactPage,
    ContactFooter
  }
};
</script>

<style>
/* Estilos globales */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Estilos para el ContactPage */
.contact-page {
  flex: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Estilos para el ContactFooter */
.contact-footer {
  background-color: #333;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  transition: all 0.5s ease-in-out;
  margin-top: auto; /* Empuja el footer hacia abajo */
}

.contact-footer:hover {
  transform: scale(1.05);
}

.contact-info, .social-links {
  flex: 1;
}

.social-links ul {
  list-style-type: none;
  padding: 0;
}

.social-links li {
  margin-bottom: 10px;
}
</style>

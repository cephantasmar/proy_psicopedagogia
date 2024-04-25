<template>
  <div class="contact-page">
    <h1>Contacto</h1>
    <p>Si tienes alguna pregunta o comentario, no dudes en contactarnos.</p>
    <form @submit.prevent="submitForm" class="contact-form">
      <div class="form-group">
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="formData.name" placeholder="Tu nombre" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" placeholder="tucorreo@example.com" required>
      </div>
      <div class="form-group">
        <label for="message">Mensaje:</label>
        <textarea id="message" v-model="formData.message" rows="4" placeholder="Escribe tu mensaje" required></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      console.log('Formulario enviado:', this.formData);
      alert('Formulario enviado con éxito');
      this.formData = {
        name: '',
        email: '',
        message: ''
      };
    }
  }
};
</script>

<style>
.contact-page {
  max-width: 800px;
  margin: 50px auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.contact-page h1 {
  font-size: 28px;
  margin-bottom: 20px;
}

.contact-page p {
  font-size: 16px;
  margin-bottom: 30px;
}

.contact-form .form-group {
  margin-bottom: 20px;
}

.contact-form label {
  display: block;
  font-size: 18px;
  margin-bottom: 8px;
}

.contact-form input[type="text"],
.contact-form input[type="email"],
.contact-form textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.contact-form button {
  padding: 12px 20px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.contact-form button:hover {
  background-color: #0056b3;
}
</style>

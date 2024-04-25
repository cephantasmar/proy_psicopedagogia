<template>
  <div class="login-container">
    <div class="login-header">
      <img src="@/assets/cropped-logo-UCB.png" alt="Imagen de inicio de sesión" class="login-image">
      <h2 class="login-title">Iniciar sesión</h2>
    </div>
    <form @submit.prevent="login" class="login-form">
      <div class="form-group">
        <label for="username" class="form-label">Nombre de usuario:</label>
        <input type="text" id="username" v-model="username" class="form-input" required>
      </div>
      <div class="form-group">
        <label for="password" class="form-label">Contraseña:</label>
        <input type="password" id="password" v-model="password" class="form-input" required>
      </div>
      <button type="submit" class="submit-button">Iniciar sesión</button>
    </form>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    login() {
      if (this.username === 'usuario' && this.password === 'contraseña') {
        console.log('Inicio de sesión exitoso');
        this.errorMessage = '';
      } else {
        this.errorMessage = 'Nombre de usuario o contraseña incorrectos';
      }
    }
  }
};
</script>

<style scoped>

.login-container {
  max-width: 400px;
  margin: 100px auto;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: #080052;
}

.login-title {
  text-align: center;
  margin-bottom: 20px;
  color: #fff;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.form-label {
  font-size: 16px;
  margin-bottom: 5px;
  color: #fff;
}

.form-input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #0056b3;
}

.error-message {
  color: red;
  margin-top: 10px;
  text-align: center;
}

.login-header {
  text-align: center;
  margin-bottom: 20px;
}

.login-image {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}
</style>

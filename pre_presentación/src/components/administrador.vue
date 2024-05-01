<template>
  <div id="separador">
    <div class="login-container">
      <div class="login-header">
        <h2 class="login-title">Iniciar sesión</h2>
      </div>
      <form @submit.prevent="login" class="login-form">
        <div class="form-group">

          <label for="username" class="form-label">Nombre de usuario:</label>
          <ion-icon name="person-outline"></ion-icon>

          <input type="text" id="username" v-model="username" class="form-input" required>
        </div>
        <div class="form-group">

          <label for="password" class="form-label">Contraseña:</label>
          <ion-icon name="lock-closed-outline" ></ion-icon>
          <input type="password" id="password" v-model="password" class="form-input" required>
        </div>
        <button type="submit" class="submit-button">Iniciar sesión</button>
      </form>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    </div>
  </div>
  </template>
  
  <script>
  import axios from 'axios';
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
    async login() {
      try {
        // Hacer una solicitud al servidor para obtener la base de datos de usuarios
        const response = await axios.get('http://localhost:3000/api/usuarios');
        const usuarios = response.data;
        
        // Verificar el inicio de sesión examinando la base de datos de usuarios
        const usuarioValido = usuarios.find(usuario => usuario.username === this.username && usuario.password === this.password);
        if (usuarioValido) {
          console.log('Inicio de sesión exitoso:', usuarioValido);
          this.errorMessage = '';
          this.$router.push('gui_administrador');
        } else {
          this.errorMessage = 'Nombre de usuario o contraseña incorrectos';
        }
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        this.errorMessage = 'Error al iniciar sesión';
      }
    }
  }
  };
  </script>
  
  <style scoped>
#separador{
  padding-top: 10%;
}

/* Estilos generales para el contenedor */
.login-container {
  max-width: 400px;
  margin-left: 40%;
  margin-top: 0;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 8px;
  background-color: #fff;
}

/* Estilo para el encabezado del login */
.login-header h2.login-title {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

/* Estilos para el formulario y sus componentes */
.login-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.form-label {
  display: block;
  margin-bottom: 5px;
  color: #666;
  font-size: 14px;
}

.form-input {
  width: 100%;
  padding: 8px 10px;
  box-sizing: border-box;
  transition: border-color 0.3s;
}

.form-input:focus {
  border-color: #0056b3;
  outline: none;
}

/* Estilo para el botón de enviar */
.submit-button {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #027FEB;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #0056b3;
}

/* Estilos para el mensaje de error */
.error-message {
  color: #ff0000;
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
}

  </style>
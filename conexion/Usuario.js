const mongoose = require('mongoose');


const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique: true
    }
});

const Usuario = mongoose.model('Usuario', usuarioSchema, 'usuarios');

module.exports = Usuario;


const mongoose = require('mongoose');

async function conectarBaseDatos() {
    try {
        await mongoose.connect('mongodb://localhost:27017/adminstradores');
        console.log('Conexión exitosa a la base de datos');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}

conectarBaseDatos(); 


console.log('Intentando conectar a la base de datos...');


module.exports = conectarBaseDatos;

const express = require('express');
const conectarBaseDatos = require('./conexion');
const Usuario = require('./Usuario'); 

const app = express();


conectarBaseDatos();

app.get('/', (req, res) => {
    res.send('¡Hola Mundo!');
});

app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.find(); 
        res.send(usuarios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});

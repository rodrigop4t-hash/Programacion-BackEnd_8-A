import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Usuario from './models/usuario.model.js';

dotenv.config();

const app = express();
const puerto = 3000;
const uri = process.env.URI;

// MIDDLEWARE (antes de rutas)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//  RUTAS (antes de arrancar el servidor)

// Ruta de prueba
app.get('/', (req, res) => {
  res.send("API con MongoDB funcionando");
});

//  POST (crear usuario)
app.post('/usuarios', async (req, res) => {
  try {
    const usuario = await Usuario.create(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    res.status(500).json({ error: "Error al crear el usuario" });
  }
});

//  CONEXIÓN Y SERVIDOR
async function startServer() {
  try {
    await mongoose.connect(uri);
    console.log("Conectado a MongoDB con dotenv 🚀");

    app.listen(puerto, () => {
      console.log(`Servidor en http://localhost:${puerto}`);
    });

  } catch (error) {
    console.log("Error al conectar:", error);
  }
}

startServer();
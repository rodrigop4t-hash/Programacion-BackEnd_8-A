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

// Seccion 5
app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
});

//  Seccion 6 OBTENER USUARIO POR ID
app.get('/usuario/:id', async (req, res) => {
  try {
    // Extrae el id
    const { id } = req.params;

    // Busca en la BD
    const usuario = await Usuario.findById(id);

    // Validación (muy importante)
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    // Respuesta
    res.status(200).json(usuario);

  } catch (error) {
    console.error("Error al obtener usuario:", error);
    res.status(500).json({ error: "Error al obtener usuario" });
  }
});

// SECCIÓN 7 (PUT)
app.put('/usuario/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const usuario = await Usuario.findByIdAndUpdate(id, req.body);

    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const usuarioActualizado = await Usuario.findById(id);

    res.status(200).json(usuarioActualizado);
    console.log(usuarioActualizado);

  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    res.status(500).json({ error: "Error al actualizar usuario" });
  }
});

// SECCIÓN 8 (DELETE)
app.delete('/usuario/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const usuario = await Usuario.findByIdAndDelete(id);

    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.status(200).json({ message: "Usuario eliminado" });

  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    res.status(500).json({ error: "Error al eliminar usuario" });
  }
});

//  CONEXIÓN Y SERVIpDOR
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

if (process.env.NODE_ENV !== 'test') {
  startServer();
}

export default app;
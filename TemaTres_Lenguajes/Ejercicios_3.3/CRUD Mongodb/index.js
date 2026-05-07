import express from 'express';
import dotenv from 'dotenv';
import { MongoClient, ObjectId } from 'mongodb';

dotenv.config();

const app = express();
const puerto = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// URI desde .env
const uri = process.env.URI;

// Cliente MongoDB
const client = new MongoClient(uri);

// Colección
let usuariosCollection;

// Conectar MongoDB
async function conectarDB() {
  try {
    await client.connect();

    console.log('Conectado a MongoDB sin Mongoose 🚀');

    // Base de datos
    const db = client.db('crudDB');

    // Colección
    usuariosCollection = db.collection('usuarios');

    // Iniciar servidor
    app.listen(puerto, () => {
      console.log(`Servidor en http://localhost:${puerto}`);
    });

  } catch (error) {
    console.log('Error al conectar:', error);
  }
}

//
// RUTAS CRUD
//

// Ruta principal
app.get('/', (req, res) => {
  res.send('API CRUD con Driver Oficial MongoDB');
});

// GET TODOS
app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await usuariosCollection.find().toArray();

    res.status(200).json(usuarios);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Error al obtener usuarios'
    });
  }
});

// POST
app.post('/usuarios', async (req, res) => {
  try {
    const resultado = await usuariosCollection.insertOne(req.body);

    res.status(201).json(resultado);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Error al crear usuario'
    });
  }
});

// GET POR ID
app.get('/usuario/:id', async (req, res) => {
  try {
    const usuario = await usuariosCollection.findOne({
      _id: new ObjectId(req.params.id)
    });

    res.status(200).json(usuario);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Error al obtener usuario'
    });
  }
});

// PUT
app.put('/usuario/:id', async (req, res) => {
  try {
    const resultado = await usuariosCollection.updateOne(
      {
        _id: new ObjectId(req.params.id)
      },
      {
        $set: req.body
      }
    );

    res.status(200).json(resultado);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Error al actualizar usuario'
    });
  }
});

// DELETE
app.delete('/usuario/:id', async (req, res) => {
  try {
    const resultado = await usuariosCollection.deleteOne({
      _id: new ObjectId(req.params.id)
    });

    res.status(200).json(resultado);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Error al eliminar usuario'
    });
  }
});

// Ejecutar conexión
conectarDB();
import express from 'express';
import mongoose from 'mongoose';

const app = express();
const puerto = 3000;

// 👇 PEGA TU CADENA AQUÍ
const uri = "mongodb+srv://admin:<mate0416>@backend.k2zlcpi.mongodb.net/?appName=Backend";

// Conecta a la base de datos
mongoose.connect(uri)
  .then(() => {
    console.log("Conexión exitosa a la base de datos");
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
  });

// Ruta de prueba
app.get('/', (req, res) => {
  res.send("API funcionando con MongoDB");
});

app.listen(puerto, () => {
  console.log(`Servidor en http://localhost:${puerto}`);
});
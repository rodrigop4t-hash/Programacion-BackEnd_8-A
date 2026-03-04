import express from 'express';

const app = express();
const port = 3000;

// GET - Prueba inicial
app.get('/', (req, res) => {
    res.status(200).send('<h1>Hola Mundo</h1>');
});

// POST - Registro
app.post('/registro', (req, res) => {
    res.status(201).json({ mensaje: 'Registro exitoso' });
});

// PUT - Actualizar
app.put('/usuario/actualizar', (req, res) => {
    res.status(200).json({ mensaje: 'Actualización exitosa' });
});

// PATCH - Modificar
app.patch('/usuario/modificar', (req, res) => {
    res.status(200).json({ mensaje: 'Modificación exitosa' });
});

// DELETE - Eliminar
app.delete('/usuario/eliminar', (req, res) => {
    res.status(200).json({ mensaje: 'Eliminación exitosa' });
});

app.listen(port, () => {
    console.log(`Servidor ejecutándose en puerto ${port}`);
});

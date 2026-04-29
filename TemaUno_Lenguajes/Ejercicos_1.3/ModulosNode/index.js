const fs = require('fs');

// Crear archivo
fs.writeFile('archivo.txt', 'Hola desde NodeJS', (err) => {
    if (err) throw err;
    console.log('El archivo ha sido creado con éxito.');

    // Leer archivo después de crearlo
    fs.readFile('archivo.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
});
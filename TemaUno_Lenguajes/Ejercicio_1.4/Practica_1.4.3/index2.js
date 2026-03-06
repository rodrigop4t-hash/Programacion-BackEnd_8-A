import express from "express";
import { dirname } from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log(__dirname);

const app = express();
const port = 3000;

// 6. variable global
var nombreEquipo = "";

// middleware para leer formularios
app.use(bodyParser.urlencoded({ extended: true }));

// 2. función middleware registrador
function registrador(req, res, next){

  if(req.body && req.body.adjetivo && req.body.mascota){

    // 3. imprimir datos enviados
    console.log( req.body);

    // 4. asignar valores a la variable global

    nombreEquipo = req.body.adjetivo + " " + req.body.mascota;

    console.log("Nombre del equipo:", nombreEquipo);
  }

  // continuar
  next();
}

// 7. usar middleware
app.use(registrador);

// mostrar el formulario
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// recibir datos
app.post("/submit", (req, res)=>{
  console.log(req.body);
  res.send(`El nombre del equipo es: ${nombreEquipo}`);
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en puerto ${port}`);
});
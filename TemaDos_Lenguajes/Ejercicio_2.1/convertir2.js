const json = '{"nombre":"Taco de Pollo","ingredientes":{"proteina":"Pollo","salsa":"Salsa Verde"}}';

// Convertir a objeto JS
const objeto = JSON.parse(json);

// Mostrar resultado
console.log(objeto);
console.log(objeto.nombre);
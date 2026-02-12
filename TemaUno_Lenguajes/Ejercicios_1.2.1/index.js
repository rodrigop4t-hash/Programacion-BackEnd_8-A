// Ejercicios 1.2.1: Sintaxis basico de node.js
// Alumno: Julio Rodrigo Pat Balam

// a. Integrar información en comentarios
// Este archivo contiene ejercicios básicos de NodeJS
// donde se practican variables, funciones, objetos,
// módulos, asincronía y manejo de errores.


// ===========================================
// b. Declaración de tipos de datos
// ===========================================

let texto = "Hola NodeJS"; // String
let numero = 25; // Number
let booleano = true; // Boolean
let valorNulo = null; // Null
let indefinido; // Undefined
let simbolo = Symbol("ID"); // Symbol
let numeroGrande = 1234567890123456789n; // BigInt

console.log("===== Tipos de Datos =====");
console.log(texto);
console.log(numero);
console.log(valorNulo);
console.log(indefinido);
console.log(simbolo);
console.log(numeroGrande);



// ===========================================
// c. Array con diferentes tipos de datos
// ===========================================

let arreglo = ["Rodrigo", 20, true, null, { ciudad: "Felipe Carillo Puerto" }];

console.log("\n===== Array =====");
console.log(arreglo);



// ===========================================
// d. Función polinómica de segundo grado
// ax² + bx + c
// ===========================================

function polinomio(a, b, c, x) {
    let resultado = a * x * x + b * x + c;
    console.log("\nResultado del polinomio:", resultado);
}

polinomio(2, 3, 1, 4);



// ===========================================
// e. Función flecha manipulación de string
// ===========================================

const manipularCadena = (cadena) => {
    console.log("\nTexto en mayúsculas:", cadena.toUpperCase());
    console.log("Texto en minúsculas:", cadena.toLowerCase());
};

manipularCadena("Aprendiendo NodeJS");



// ===========================================
// f. Bucle descendente del 10 al 1
// ===========================================

function conteoDescendente() {
    console.log("\nConteo descendente:");

    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }
}

conteoDescendente();



// ===========================================
// g. Crear objeto institución
// ===========================================

let institucion = {
    nombre: "Instituto Tecnológico",
    ciudad: "Felipe Carrilo Puerto",
    alumnos: 3000,
    carrera: "Ingeniería en Sistemas"
};



// ===========================================
// h. Agregar método al objeto
// ===========================================

institucion.descripcion = function () {
    return `La institución ${this.nombre} ubicada en ${this.ciudad}
ofrece la carrera de ${this.carrera}.`;
};

console.log("\n===== Objeto Institución =====");
console.log(institucion.descripcion());



// ===========================================
// i. Módulo matemático dentro del mismo archivo
// ===========================================

const matematicas = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => a / b
};

console.log("\n===== Operaciones Matemáticas =====");
console.log("Suma:", matematicas.sumar(5, 3));
console.log("Resta:", matematicas.restar(5, 3));
console.log("Multiplicación:", matematicas.multiplicar(5, 3));
console.log("División:", matematicas.dividir(5, 3));



// ===========================================
// j. Operación asincrónica con callback
// ===========================================

function operacionAsincronica(callback) {

    setTimeout(() => {
        callback("Operación completada correctamente");
    }, 2000);

}

operacionAsincronica((resultado) => {
    console.log("\nResultado asincrónico:", resultado);
});



// ===========================================
// k. Conversión string a número con errores
// ===========================================

function convertirNumero(texto) {

    try {

        let numero = Number(texto);

        if (isNaN(numero)) {
            throw new Error("No es un número válido");
        }

        console.log("\nNúmero convertido:", numero);

    } catch (error) {

        console.log("Error:", error.message);

    }

}

convertirNumero("123");
convertirNumero("Hola");

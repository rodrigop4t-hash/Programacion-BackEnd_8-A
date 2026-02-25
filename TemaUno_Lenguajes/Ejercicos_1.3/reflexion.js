/*
REFLEXIÓN EJERCICIO 1.3

1. ¿Cuál es la diferencia fundamental entre un módulo nativo (como 'fs')
y un módulo de NPM (como 'sillyname') en cuanto a su origen e instalación?

Un módulo nativo como 'fs' ya viene incluido cuando instalas Node.js,
no necesitas instalar nada extra para usarlo.
En cambio, un módulo de NPM como 'sillyname' lo crea otra persona
y tienes que descargarlo con 'npm install'. Básicamente,
uno ya viene con Node y el otro lo agregas tú al proyecto.

2. Investigando la sintaxis: ¿Qué diferencia existe entre 'require (CommonJS)
y 'import' (ES Modules)? Considera el momento en que se cargan los módulos.


'require' es la forma antigua (CommonJS) y carga los módulos
cuando el programa se está ejecutando.
Se puede poner casi en cualquier parte del archivo.

'import' es la forma moderna (ES Modules) y carga los módulos
antes de que el programa empiece a correr.
Además, debe ir al inicio del archivo.
Por eso ahora se recomienda usar 'import'.


3. Sobre el package.json

a) ¿Por qué es vital compartir este archivo pero NO la carpeta 'node_modules' al subir a un repositorio?
Se comparte el package.json porque ahí están todas las dependencias
y la información del proyecto.
No se sube la carpeta node_modules porque pesa mucho
y se puede volver a crear fácilmente con npm install.

b) ¿Qué sucede si ejecutas 'npm install' en una carpeta que solo tiene el package.json?
Si ejecutas 'npm install' en una carpeta que solo tiene package.json,
npm descarga automáticamente todas las dependencias
y vuelve a crear la carpeta node_modules.
*/

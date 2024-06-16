// Leer README

const os = require('os');

const hostname = os.hostname()

console.log(`Nombre del equipo: ${hostname}`);

const osVersion = os.version();

console.log(`Edición/Versión del sistema operativo: ${osVersion}`);

// Obtener la memoria RAM total en GB

const memoryGb = Math.ceil(os.totalmem()/ (1024 ** 3));

console.log(`Memoria RAM total: ${memoryGb}`);
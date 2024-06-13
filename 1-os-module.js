// Leer README

const os = require('os');

// Obtener el nombre del equipo
const hostname = os.hostname();
console.log(`Nombre del equipo: ${hostname}`);

// Obtener la versión del sistema operativo
const osVersion = os.version();
console.log(`Edición/Versión del sistema operativo: ${osVersion}`);

// Obtener la memoria RAM total en GB
const totalMemoryGB = os.totalmem() / (1024 ** 3);
console.log(`Memoria RAM total: ${Math.ceil(totalMemoryGB)} GB`);
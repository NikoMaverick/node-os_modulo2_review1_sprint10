const os = require('os');

//Creamos la función para obtener los datos solicitados de la maquina
function getData(){
const name = os.hostname();
const type = os.type();
const version = os.version();
const arch = os.arche();
const cpus = os.cpus();
const totalMemory = os.totalmen();
const freeMemory = os.fremen();

// Retornamos la cadena con los datos pedidos anteriormente
return {
    Nombre: name,
    Tipo: type,
    Version: version,
    Arquitectura: arche,
    CPUs: cpus,
    MemoriaTotal: totalmen,
    MemoriaLibre: fremen,
};
}
console.log(globalThis);
module.exports = {getData}
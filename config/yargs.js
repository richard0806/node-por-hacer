const desc = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
};

const comp = {
    completado: {
        alias: 'c',
        default: true
    }
};

const argv = require('yargs')
    .command('crear', 'Crea una Tarea por hacer', desc)
    .command('actualizar', 'Actualiza una Tarea por hacer', { desc, comp })
    .command('borrar', 'Borrar una Tarea por hacer', desc)
    .help()
    .argv;

module.exports = {
    argv
}
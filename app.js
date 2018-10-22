const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        //console.log(porHacer.getListado().descripcion);
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('======== Por Hacer ========'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('==========================='.green);
        }
        break;

    case 'actualizar':
        let resultado = porHacer.actualizar(argv.descripcion, argv.completado);
        if (resultado) {
            console.log('Archivo actualizado');
        } else {
            console.log('Error de actualizacion');
        }
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Instruccion no valida');
}
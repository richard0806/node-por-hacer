const fs = require('fs');

let listadoPorHacer = [];


const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new err('No se pudo grabar', err);

    });

}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (err) {
        listadoPorHacer = [];
    }


}

const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);

    guardarDB();

    //return porHacer;
}

const getListado = () => {

    cargarDB();

    return listadoPorHacer;
}

const actualizar = (descr, complet = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descr);

    if (index >= 0) {
        listadoPorHacer[index].completado = complet;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descrip) => {
    cargarDB();

    let index = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descrip
    });

    if (listadoPorHacer.length === index.length) {
        return false;
    } else {
        listadoPorHacer = index;
        guardarDB()
        return true;
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}
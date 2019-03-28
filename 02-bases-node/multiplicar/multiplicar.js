//requireds
const fs = require('fs')
const colors = require('colors')

//Forma 1 de exportar:
/* 
 *module.exports.crearArchivo = base => ...
 */

let listarTabla = (base, limite = 10) => {
    console.log('===================='.green);
    console.log(`==== tabla de ${base} ====`.green);
    console.log('===================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}\n`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ingresado ${base} no es un numero`)
            return
        }
        let data = ''
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`
        }
        fs.writeFile(`tablas/tabla-${base}-al.${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`.green)
        });
    })
}

//Forma 2 de exportar nuestros objetos:
module.exports = {
    crearArchivo,
    listarTabla
}
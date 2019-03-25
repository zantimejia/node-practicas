/*ASYNC-AWAIT 
 *Se ajusta el ASYNC-AWAIT al ejercicio propuesto en el archivo callback2.js
 */
let empleados = [{
    id: 1,
    nombre: 'Santiago'
}, {
    id: 2,
    nombre: 'Danna'
}, {
    id: 3,
    nombre: 'Arley'
}]

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}]

let getEmpleado = async id => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)
    if (!empleadoDB) {
        throw new Error(`No existe el empleado co el ID ${id}`)
    } else {
        return empleadoDB
    }
}

let getSalario = async empleado => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id)
    if (!salarioDB) {
        throw new Error(`No se encontro salario para el usuario ${empleado.nombre}`)
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        }
    }
}

let getInfomarcion = async id => {
    let empleado = await getEmpleado(id)
    let ans = await getSalario(empleado)
    return `${ans.nombre} tiene un salario de $${ans.salario}`
}

getInfomarcion(3)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err))
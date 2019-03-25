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

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id)
        if (!empleadoDB) {
            reject(`No existe el empleado co el ID ${id}`)
        } else {
            resolve(empleadoDB)
        }
    })
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id)
        if (!salarioDB) {
            reject(`No se encontro salario para el usuario ${empleado.nombre}`)
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            })
        }
    })
}

getEmpleado(1).then(empleado => {
        //console.log(`Empleado de BD ${empleado}`); * WHY ?
        // console.log('Empleado de BD ', empleado);
        return getSalario(empleado)
    })
    .then(ans => {
        console.log(`El salario de ${ans.nombre} con id ${ans.id} es de ${ans.salario}$`);
    })
    .catch(err => {
        console.log(err);
    })
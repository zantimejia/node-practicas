let empleados = [{
    id: 1,
    nombre: 'Santiago'
}, {
    id: 2,
    nombre: 'Melissa'
}, {
    id: 3,
    nombre: 'Juan'
}]

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}]

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)
    if (!empleadoDB) {
        callback(`No existe el empleado co el ID ${id}`)
    } else {
        callback(null, empleadoDB)
    }
}

getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id)
    if (!salarioDB) {
        callback(`No se encontro salario para el usuario ${empleado.nombre}`)
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        })
    }
}

// De forma independiente, sin usar el getEmpleado
/* getSalario = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)
    if (!empleadoDB) {
        callback(`No existe el empleado co el ID ${id}`)
    } else {
        let salarioDB = salarios.find(salario => salario.id === empleadoDB.id)
        if (!salarioDB) {
            callback(`No se encontro salario para el usuario ${empleadoDB.nombre}`)
        } else {
            callback(null, `nombre: ${empleadoDB.nombre}, salario: ${salarioDB.salario}`)
        }
    }
} */

/* getSalario(11, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    console.log(empleado);
}) */

getEmpleado(4, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    getSalario(empleado, (err, ans) => {
        if (err) {
            return console.log(err);
        }
        console.log(`El salario de ${ans.nombre} con id ${ans.id} es de ${ans.salario}$`);
    })
})
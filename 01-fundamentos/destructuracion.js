let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
}

/* let nombre = deadpool.nombre;
let apellido = deadpool.apellido;
let poder = deadpool.poder; */

// Forma1 - Usando el mismo nombre del objeto
// let { nombre, apellido, poder } = deadpool

// Forma2 - Usando un nombre diferente al del objeto
let { nombre: primerNombre, apellido, poder } = deadpool

console.log(primerNombre, apellido, poder);
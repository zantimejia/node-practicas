//Funcion Normal
/* function sumar(a, b) {
    return a + b
} */

//Arrow Function
/* let sumar = (a, b) => {
    return a + b
} */

//Arrow Function Mejorada
/* let sumar = (a, b) => a + b

console.log(sumar(1, 1)); */

/* let saludar = () => 'Hola Mundo'

console.log(saludar()); */

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }

}

console.log(deadpool.getNombre());
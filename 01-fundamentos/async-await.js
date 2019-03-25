/* ASYNC
 *Con solo anteponer la palabra Async, lo que retorne nuestra funcion
 *se convertira en una promesa. Ademas cualquier error que se de dentro 
 *de la funcion automaticamente activara el catch. 
 */

/* AWAIT 
 *Este debe estar dentro de una funcion que use la palabra ASYNC
 *y lo que hace es que algo que es asincronico lo vuelve sincrono
 *forzando a esperar que la promesa retorne algo para poder continuar.
 *Tener mucho cuidado porque si no retorna nada, nunca va a continuar
 *el flujo normal del programa.
 */

/* let getNombre = async() => {
    //Asi disparamos nuestros errores.
    throw new Error('No se encontro un usuario con ese nombre')
    return 'Fernando'
} */

//Esto seria los mismo que usar la palabra ASYNC
let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Fernando')
        }, 3000)
    })
}

let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${nombre}`
}
console.log('Inicio de Programa');
saludo().then(mensaje => {
        console.log(mensaje);
    })
    .catch(e => {
        console.log('Error de ASYNC ', e);
    })
console.log('Fin de Programa');
const c = console.log

c('***Programacion asincrona***')

c('*********Promises*********')

// const cuadrado = (value, callback) => {
//   setTimeout(() => {
//     callback(value, value * value)
//   }, 0 | Math.random() * 100)
// }

const cuadrado = value => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ value: value, result: value * value })
    }, 0 | Math.random() * 100)
  })
}

cuadrado(0)
  .then(obj => {
    c('Inicio Promise')
    c(`Promise: ${obj.value},${obj.result}`)
    return cuadrado(1)
  })
  .then(obj => {
    c(`Promise: ${obj.value},${obj.result}`)
    return cuadrado(2)
  })
  .then(obj => {
    c(`Promise: ${obj.value},${obj.result}`)
    return cuadrado(3)
  })
  .then(obj => {
    c(`Promise: ${obj.value},${obj.result}`)
    return cuadrado(4)
  })
  .then(obj => {
    c(`Promise: ${obj.value},${obj.result}`)
    return cuadrado(5)
  })
  .then(obj => {
    c(`Promise: ${obj.value},${obj.result}`)
    return cuadrado(6)
  })
  .then(obj => {
    c(`Promise: ${obj.value},${obj.result}`)
    return cuadrado(7)
  })
  .then(obj => {
    c(`Promise: ${obj.value},${obj.result}`)
    return cuadrado(8)
  })
  .then(obj => {
    c(`Promise: ${obj.value},${obj.result}`)
    return cuadrado(9)
  })
  .then(obj => {
    c(`Promise: ${obj.value},${obj.result}`)
    return cuadrado(10)
  })
  .then(obj => {
    c(`Promise: ${obj.value},${obj.result}`)
    c('Fin Promise')
  })
  .catch(err => c(err))

c('Promise Hell Yeaaaaaah')

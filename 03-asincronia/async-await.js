const c = console.log

c('***Programacion asincrona***')

c('***Async - Await Functions***')

//************Callback************/
// const cuadrado = (value, callback) => {
//   setTimeout(() => {
//     callback(value, value * value)
//   }, 0 | Math.random() * 100)
// }

//************Promise************/
// const cuadrado = value => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ value: value, result: value * value })
//     }, 0 | Math.random() * 100)
//   })
// }

const cuadrado = value => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ value: value, result: value * value })
    }, 0 | Math.random() * 100)
  })
}

async function cuadrados() {
  c('Inicio Async Function')
  let obj = await cuadrado(0)
  c(`Async Function: ${obj.value},${obj.result}`)
  obj = await cuadrado(1)
  c(`Async Function: ${obj.value},${obj.result}`)
  obj = await cuadrado(2)
  c(`Async Function: ${obj.value},${obj.result}`)
  obj = await cuadrado(3)
  c(`Async Function: ${obj.value},${obj.result}`)
  obj = await cuadrado(4)
  c(`Async Function: ${obj.value},${obj.result}`)
  obj = await cuadrado(5)
  c(`Async Function: ${obj.value},${obj.result}`)
  obj = await cuadrado(6)
  c(`Async Function: ${obj.value},${obj.result}`)
  obj = await cuadrado(7)
  c(`Async Function: ${obj.value},${obj.result}`)
  obj = await cuadrado(8)
  c(`Async Function: ${obj.value},${obj.result}`)
  obj = await cuadrado(9)
  c(`Async Function: ${obj.value},${obj.result}`)
  obj = await cuadrado(10)
  c(`Async Function: ${obj.value},${obj.result}`)
  c('Fin Function')
}

cuadrados()
c('Async Function Hell Yeaaaah')

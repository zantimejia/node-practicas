const c = console.log

c('***Programacion asincrona***')

c('*********CallBack´s*********')

const cuadrado = (value, callback) => {
  setTimeout(() => {
    callback(value, value * value)
  }, 0 | Math.random() * 100)
}

cuadrado(0, (value, result) => {
  c('Inicio Callback')
  c(`Callback: ${value},${result}`)
  cuadrado(1, (value, result) => {
    c(`Callback: ${value},${result}`)
    cuadrado(2, (value, result) => {
      c(`Callback: ${value},${result}`)
      cuadrado(3, (value, result) => {
        c(`Callback: ${value},${result}`)
        cuadrado(4, (value, result) => {
          c(`Callback: ${value},${result}`)
          cuadrado(5, (value, result) => {
            c(`Callback: ${value},${result}`)
            cuadrado(6, (value, result) => {
              c(`Callback: ${value},${result}`)
              cuadrado(7, (value, result) => {
                c(`Callback: ${value},${result}`)
                cuadrado(8, (value, result) => {
                  c(`Callback: ${value},${result}`)
                  cuadrado(9, (value, result) => {
                    c(`Callback: ${value},${result}`)
                    cuadrado(10, (value, result) => {
                      c(`Callback: ${value},${result}`)
                      c('Fin Callback')
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
})

c('Callback Hell Yeaaaah')

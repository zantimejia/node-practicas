const argv = require('./config/yargs').argv
    // const multiplicar = require('./multiplicar/multiplicar')
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar') //Destructuracion
console.log('yargs: ', argv);
let command = argv._[0]
switch (command) {
    case 'listar':
        console.log('listar')
        listarTabla(argv.base, argv.limite)
        break
    case 'crear':
        console.log('crear')
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err))
        break
    default:
        console.log('comando no reconocido');
}

/* let argv2 = process.arg
let parametro = argv[2]
let base = parametro.split('=')[1] */
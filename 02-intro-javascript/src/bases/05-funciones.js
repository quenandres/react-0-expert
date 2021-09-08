// Funciones en JS
const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}


const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}


const saludar3 = (nombre) => `Hola, ${nombre}`;


console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Trunks'));

const getUser = () => ({
    uid: 'AB123',
    username: 'AAAAAAAA'
})

console.log(getUser());

//Tarea.
// 1. Tranformar a funcion flecha
// 2. tiene que retornar objeto implicito
// 3. Pruebas
const getUsuarioActivo = ( nombre ) => 
    ({
        uid: 'asdasda',
        username: nombre
    })


const usuarioActivo = getUsuarioActivo('Jhonatan');
console.log(usuarioActivo);

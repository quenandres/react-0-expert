
const nombre   = 'Fernando';
const apellido = 'Herrera';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

//console.log( nombreCompleto );


export function getSaludo( nombre='Carlos' ) { // Para hacer la prueba en otro lado, se debe hacer exportacion de la funcion
    return 'Hola ' + nombre +'!';
}

//console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );
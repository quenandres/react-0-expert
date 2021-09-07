const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lon: 34.9233321
    }
};

//console.table( persona );
console.log( persona );

const persona2 = { ...persona }; // Operador spreed ES6 Para clonar el objeto en otro espacio de memoria
persona2.nombre = 'Peter';
console.log(persona2)
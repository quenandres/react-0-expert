// Desestructuración
// Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iron man',
};


/* console.log( nombre );
console.log( edad );
console.log( clave ); */

const auseContextUser = ({ nombre, edad, rango = 'Capitan', clave }) => {
    //console.log(nombre,edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14444,
            lng: -54111
        }
    }
}

const avenger = auseContextUser( persona );
const { nombreClave, anios, latlng:{lat, lng} } = avenger // latlng:{lat, lng} Desestructuracion de un objeto dentro de otro
console.log(avenger);
console.log(nombreClave, anios);
console.log(lat);
console.log(lng);
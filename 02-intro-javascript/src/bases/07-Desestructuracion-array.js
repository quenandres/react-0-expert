// Desestructuración de arrays
const personajes = ['Goku','Vegeta','Trunks'];

const [ , , p1 ] = personajes; // Las comas se usan para saltar espacios que de variables que no se van a usar

console.log(p1);

const retornaArreglo = () => {
    return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);


// Tarea
// 1. Primer posicion del arreglo que se llame nombre
// 2. setNombre
const QuseState2 = (valor) => {
    return [valor, () => {console.log("Hola mundo")}];
}

const [nombre, setNombre] = QuseState2('Goku');
console.log(nombre);
setNombre();


import {heroes, owners} from "../data/heroes";
/*
Ejemplo para dejar uno por default
import heroes, {owners} from "../data/heroes";

*/


const getHeroeById = (id) => heroes.find(( heroe ) => heroe.id === id);


console.log( getHeroeById(2) );

const getHeroesByOwner = ( owner ) => heroes.filter(( heroe ) => heroe.owner === owner);

console.log( getHeroesByOwner('Marvel') );

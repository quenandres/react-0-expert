
import { getHeroeById, getHeroesByOwner } from './bases/08-import-export';

// Promesas
/* const promesa = new Promise( (resolve, reject) => {//Async
    setTimeout(() => {
        console.log('2 Segundos despues');
        // Tarea
        // Importar funciones de clase 08
        const heroe = getHeroeById(2);
        resolve( heroe );
        //reject('No se pudo encontrar el héroe');
    }, 2000)
}); 

promesa
.then((heroe) => {
    console.log('then de la promesa')
    console.log( heroe );
})
.catch( err => console.warn( err ) )
.finally() */

const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {//Async
        setTimeout(() => {
            console.log('2 Segundos despues');            
            const heroe = getHeroeById(id);
            if( heroe ) {
                resolve( heroe );
            } else {
                reject('Heroe no encontrado');
            }
            //reject('No se pudo encontrar el héroe');
        }, 2000)
    }); 
}

getHeroeByIdAsync(2).
    then( console.log ).
    catch( console.warn );
    

    
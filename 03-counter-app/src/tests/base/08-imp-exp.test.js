import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Heroes 08-imp-exp', () => {
    test('debe de retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find( h => h.id === id );
        expect(heroe).toEqual(heroeData);
    });

    test('debe de retornar undefined si el heroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        
        expect(heroe).toBe( undefined );
    });

    //Tarea:
    // 1. Retornar un arreglo con los heroes de DC
    // - owner
    // - toEqual al arreglo filtrado
    test('Retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );
        const heroeData = heroes.filter( h => h.owner === owner );
        expect( heroes ).toEqual(heroeData);
    });

    // 2. Retornar un arreglo con los heroes de Marvel
    // - toBe length = 2
    test('Retornar un arreglo con los heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );
        expect( heroes.length ).toBe( 2 );
    });

    //Owner que no existe
    test('Owner que no existe', () => {
        const owner = 'A';
        const heroes = getHeroesByOwner( owner );
        expect( heroes.length ).toBe( 0 );
    });
})
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';


describe('Pruebas de promesas', () => {
    test('getHeroeByIdAsync debe retornar un hero async', ( done ) => {
        const id = 1;
        getHeroeByIdAsync(id)
        .then( heroe => {
            expect( heroe ).toBe( heroes[0] );
            done();
        });
    }, 100000);

    test('debe obtener un error si el heroe por id no existe', ( done ) => {
        const id = 10;
        getHeroeByIdAsync(id)
            .catch( error => {
                expect( error ).toBe('No se pudo encontrar el héroe');
                done();
            })
    });
    
});


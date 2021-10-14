import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs Fetch', () => {
    test('debe de traer 10 elementos', async () => {
        const gif = await getGifs('One Punch');
        expect( gif.length ).toBe(10);
    });

    test('no debe traer nada por que no se le envia categoria', async () => {
        const gif = await getGifs('');        
        expect( gif.length ).toBe(0);
    });
})
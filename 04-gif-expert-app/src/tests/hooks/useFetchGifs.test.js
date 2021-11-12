import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {

    test('debe de retornar el estado inicial', async() => {
        const { result } = renderHook( () => useFetchGifs('the office') );
        const { data, loading } = result.current;

        expect( data ).toEqual([]);
        expect( loading ).toBe( true );
    });

    test('debe de retornar un arreglo de imagenes y el loading en false', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('the office') );
        await waitForNextUpdate({timeout: 5000});
        const { data, loading } = result.current;

        expect( data.length ).toEqual( 10 );
        expect( loading ).toBe( false );
    });

})

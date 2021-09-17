import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {
    test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {
        const saludo = 'Hola, soy Goku';
        const { getByText } = render(<PrimeraApp saludo={ saludo }/>); //render es una funcion que recibe un componente que se quiere renderizar
        expect( getByText(saludo) ).toBeInTheDocument();
    });    
})

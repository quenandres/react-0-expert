import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp';


describe('Pruebas en <PrimeraApp />', () => {
    /* test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {
        const saludo = 'Hola, soy Goku';
        const { getByText } = render(<PrimeraApp saludo={ saludo }/>); //render es una funcion que recibe un componente que se quiere renderizar
        expect( getByText(saludo) ).toBeInTheDocument();
    });   */

    test('debe de mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola, soy Goku';
        const wrapper = shallow( <PrimeraApp saludo={ saludo }/> ); // Parecido a render pero puede simular click y trabajar con queryselector

        expect(wrapper).toMatchSnapshot();
    })
    

})

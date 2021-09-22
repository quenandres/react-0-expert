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
    });

    test('debe de mostrar el subtitulo enviado props', () => {
        const saludo = 'Hola, Soy Goku';
        const subtitulo = 'Soy un subtitulo';
        const wrapper = shallow(
            <PrimeraApp 
                saludo={saludo}
                subtitulo={subtitulo}
            />
        );

        const textoParrafo = wrapper.find('p').text();//Wrapper tiene toda la informacion renderizada
        // Si se quiere buscar un h1 wrapper.find('h1') Si se quiere buscar por id es igual que en css # o .
        expect( textoParrafo ).toBe( subtitulo );

    })
    
    

})

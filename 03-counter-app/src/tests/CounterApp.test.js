import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas <CounterApp />', () => {
    test('debe mostrar <CounterApp/> correctamente (hacer match con un snapshot) y sus valores por defecto', () => {
        const wrapper = shallow(<CounterApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar el valor por defecto de 100', () => {
        const wrapper = shallow(<CounterApp value={ 100 } />);
        const numero100 = wrapper.find('h2').text().trim();
        expect( numero100 ).toBe( '100' );
    });
    
    /* test('usar wrapper.find. tomando el elemento html donde se muestra el valor del contador', () => {
        
    });    */ 
});
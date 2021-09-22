import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas <CounterApp />', () => {
    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    })

    test('debe mostrar <CounterApp/> correctamente (hacer match con un snapshot) y sus valores por defecto', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar el valor por defecto de 100', () => {
        const wrapper = shallow(<CounterApp value={ 100 } />);
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe( '100' );
    });

    test('debe incrementar con el boton de +1', () => {
        const btn1 = wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('11');
    });  
    
    test('debe disminuir con el boton de -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('9');
    });  
     
});
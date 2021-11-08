import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en AddCategory', () => {
    const setCategories = jest.fn(); // Para tener manejar de saber si se llamo, con que argumento se hizo
    let wrapper = shallow( <AddCategory setCategories={ setCategories }/> );
    beforeEach(() => {
        jest.clearAllMocks(); //Para que se limpien las simulaciones
        wrapper = shallow( <AddCategory setCategories={ setCategories }/> );
    });

    test('debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de cambiar la caja de text', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', { target: { value } });
        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('no debe de postear la informacion con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });        
        expect( setCategories ).not.toHaveBeenCalled();
    });

    
    
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        // 1. Simular el input change
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', {target: { value }});
        // 2. Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        const inputAfter = wrapper.find('input').prop('value');
        
        // 3. setCategories se debe de haber llamado
        expect( setCategories ).toHaveBeenCalled();
        // 4. el valor del input debe estar como ''
        expect( inputAfter ).toBe('');
   });
})
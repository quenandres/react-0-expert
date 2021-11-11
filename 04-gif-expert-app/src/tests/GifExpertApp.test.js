import React from 'react';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';
import '@testing-library/jest-dom';

describe('Pruebas en GifExpertApp', () => {
    test('debe mostrarse correctamente el GifExpertApp', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar una lista de categorias', () => {
        const categories = ['One punch', 'Drangon ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    });
})

import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

/* 
 1. Enzyme
 2. Enzyme to json
 3. Mostrar el componente correctamente
    * shallow
    * wrapper
    * wrapper .toMatchSnapshot
*/

describe('Pruebas de GifGridItem', () => {
    test('Mostrar correctamente el gifGridItem', () => {
        const wrapper = shallow(<GifGridItem />);
        expect(wrapper).toMatchSnapshot();
    })
    
});
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas de GifGridItem', () => {

    const title = 'Titulo';
    const url = 'https://localhost/algo.png';

    test('Mostrar correctamente el gifGridItem', () => {
        const wrapper = shallow(<GifGridItem title={ title } url = { url }/>);
        expect(wrapper).toMatchSnapshot();
    })
    
});
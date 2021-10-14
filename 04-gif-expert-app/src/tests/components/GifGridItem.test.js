import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas de GifGridItem', () => {

    const title = 'Titulo';
    const url = 'https://localhost/algo.png';
    const wrapper = shallow(<GifGridItem title={ title } url = { url }/>);

    test('Mostrar correctamente el gifGridItem', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe tener un parrafo con el titulo', () => {
        const p = wrapper.find('p'); //Obtengo la referencia al parrafo
        expect( p.text().trim() ).toBe( title );
    });

    test('debe de tener la imagen al url del props', () => {
        const img = wrapper.find('img');
        //console.log(img.props()); // Para no obtener el shallow, si no mostrar codigo html(), para obtener solo los atributos se usa props() = { src: 'https://localhost/algo.png', alt: 'Titulo' }
        //Para obtener unicamente una propiedad, img.prop('src') = https://localhost/algo.png
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    });

    test('debe tener animate__rubberBand', () => {
        const class_rubber = 'animate__rubberBand';
        const div = wrapper.find('div');
        
        expect( div.props().className.includes(class_rubber) ).toBe( true );
    });
    
});
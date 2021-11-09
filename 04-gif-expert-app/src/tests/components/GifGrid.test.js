import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('test para <GifGrid />', () => {

    const category = 'One punch';
    const mockUseFetchGifs = useFetchGifs;
    const gifs = [{
        id: 'ABC',
        url: 'https://localhost/something',
        title: 'Lorem ipsum'
    }];
    beforeEach(() => {
        useFetchGifs.mockImplementation( category => {
            return { data: gifs, loading: false}
          });
    });

    test('debe mostrarse correctamente', () => {
        //Cuando se llame el mock
        mockUseFetchGifs.mockImplementation( category => {
            return { data: [], loading: true }
        });
        
        const wrapper = shallow(<GifGrid category = {category}/>);
        const title = wrapper.find('h3').prop('children');
        expect(wrapper).toMatchSnapshot();
        expect(category).toBe(title);
    });

    test('debe mostrar items cuando cargan imagenes useFetchGifs', () => {
        const data = [{
          id: '0',
          url: 'https://lorem.com/img',
          title: 'mockTitle'
        }];
          //Fingir un mock        
        mockUseFetchGifs.mockImplementation( category => {
          return { data, loading: false };
        });
        const wrapper = shallow( <GifGrid category={ category } /> );
        expect( wrapper ).toMatchSnapshot();

    });
})

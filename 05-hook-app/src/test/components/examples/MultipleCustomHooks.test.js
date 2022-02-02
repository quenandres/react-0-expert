import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('MultipleCustomHooks test', () => {

    

    test('Debe de mostrarse correctamente', () => {

        useCounter.mockReturnValue({
            counter: 1,
            increment: () => {},
            decrement: () => {},
            reset: () => {},
        });

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHooks />);
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de mostrar la informacion', () => {

        useCounter.mockReturnValue({
            counter: 1,
            increment: () => {},
            decrement: () => {},
            reset: () => {},
        });
        
        useFetch.mockReturnValue({
            data: [{
                author: 'Jhonatan',
                quote: 'Hola mundo'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        //Busquedas en el wrapper
        expect( wrapper.find('.alert').exists() ).toBe( false );
        expect( wrapper.find('footer').text().trim() ).toBe('Jhonatan');
    });
});
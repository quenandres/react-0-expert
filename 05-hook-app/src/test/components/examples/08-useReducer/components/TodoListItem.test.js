import React from 'react';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../../../components/08-use-reducer/components/TodoListItem';
import { demoTodos } from '../../../../fixtures/demoTodos';


describe('Pruebas en <TodoListItem />', () => {

    const handleToggle = jest.fn();
    const handleDelete = jest.fn();

    const wrapper = shallow(<TodoListItem 
        todo={demoTodos[0]}
        handleToggle = { handleToggle }
        handleDelete = { handleDelete }
        i = { 0 }
    />);

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de llamar la funcion borrar handleDelete', () => {
        // jest.fn()
        // toHaceBeenCalledWith
        wrapper.find('button').simulate('click');
        expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0].id );
    });

    test('debe llamar la funcion toggle handleToogle ', () => {
        wrapper.find('p').simulate('click');
        expect( handleToggle ).toHaveBeenCalledWith( demoTodos[0].id );
    });

    test('debe de mostrar el texto correctamente', () => {
        const wrapper = shallow(<TodoListItem 
            todo={demoTodos[0]}
            handleToggle = { handleToggle }
            handleDelete = { handleDelete }
            i = { 0 }
        />);
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe(`1. ${demoTodos[0].description}`);
    });

    test('debe de tener la clase complete, si el todo.done esta true', () => {

        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(<TodoListItem 
            todo={todo}
        />);

        expect( wrapper.find('.complete').exists() ).toBe( true );
        expect( wrapper.find('p').hasClass('complete') ).toBe( true );
    });
});
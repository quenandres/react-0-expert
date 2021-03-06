import React from 'react';
import { todoReducer } from "../../../../components/08-use-reducer/todoReducer";
import { demoTodos } from '../../../fixtures/demoTodos';



describe('test en todoReducer', () => {
    test('debe retornar el estado por defecto ', () => {
        const state = todoReducer( demoTodos, {});
        expect( state ).toEqual( demoTodos );
    });

    test('debe de agregar un TODO', () => {
        const newTodo = {
            id: 3,
            desc: 'Aprender Node',
            done: false
        };
        const action = {
            type: 'add',
            payload: newTodo
        };
        const state = todoReducer( demoTodos, action);
        expect( state.length ).toBe( 3 );
        expect( state ).toEqual( [...demoTodos, newTodo] );
    });

    test('debe de eliminar un TODO', () => {
        const action  = {
            type: 'delete',
            payload: 1
        };
        const state   = todoReducer( demoTodos, action);
        expect( state.length ).toBe( 1 );
        expect( state ).toEqual( [demoTodos[1]] );
    });

    test('debe desactivar o activar el todo', () => {
        const action  = {
            type: 'toggle',
            payload: 1
        };
        const state = todoReducer( demoTodos, action);
        expect( state[0].done ).toBe( true );
        expect( state[1] ).toEqual( demoTodos[1] );

    });

});
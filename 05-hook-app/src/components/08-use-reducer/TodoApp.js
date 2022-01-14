import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';
import { TodoList } from './components/TodoList';
import { TodoAdd } from './components/TodoAdd';
import './styles.css';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init); // El dispatch es una funcion a la que se le manda una accion para saber a cual reducer debe llamar
    

    useEffect(() => {
       localStorage.setItem('todos', JSON.stringify(todos)); 
    }, [todos])

    const handleDelete = ( todoId ) => {        
        // Crear accion
        const action = {
            type: 'delete',
            payload: todoId
        }
        // Dispatch
        dispatch(action);
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    const handleAddTodo = ( newTodo ) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    return (
        <div>
            <h1>TodoApp ( { todos.length } ) </h1>
            <hr />
            <div className='row'>
                <div className='col-7'>
                    {/* 
                        TodosList, todos, handleDelete, handleToggle
                    */}
                   <TodoList 
                        todos={ todos }
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                    />
                </div>
                <div className='col-5'>
                    <TodoAdd 
                        handleAddTodo={ handleAddTodo }
                    />
                </div>
            </div>
        </div>
    )
}

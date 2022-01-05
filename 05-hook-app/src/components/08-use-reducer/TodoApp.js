import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';

import './styles.css';

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init); // El dispatch es una funcion a la que se le manda una accion para saber a cual reducer debe llamar
    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });   

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
        reset();
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();

        if( description.trim().length <= 1 ) {
            return ;
        }
        
        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        };

        dispatch(action);
        reset();
    }

    return (
        <div>
            <h1>TodoApp ( { todos.length } ) </h1>
            <hr />
            <div className='row'>
                <div className='col-7'>
                    <ul className='list-group list-group-flush'>
                        {
                            todos.map((todo, i) => (
                                <li 
                                className='list-group-item'
                                key={ todo.id }
                                >
                                    <p className='text-center'> { i + 1 }. { todo.description } </p>
                                    <button 
                                        className='btn btn-danger'
                                        onClick={ () => handleDelete(todo.id) }
                                    >Borrar</button>
                                </li>
                            ))    
                        }
                    </ul>
                </div>
                <div className='col-5'>
                    <h4>Agregar TODO</h4>
                    <hr />
                    <form onSubmit={ handleSubmit }>
                        <input 
                        type="text"
                        name="description"
                        className='form-control'
                        placeholder='Aprender...'
                        autoComplete='off'
                        value={ description }
                        onChange={handleInputChange}                        
                        />

                        <button 
                            type='submit'
                            className='btn btn-outline-primary mt-1 btn-block'
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

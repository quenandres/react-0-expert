import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer';


import './styles.css';

const initialState = [{
    id: new Date().getTime(),
    description: 'Aprender react',
    done: false
}]

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, initialState); // El dispatch es una funcion a la que se le manda una accion para saber a cual reducer debe llamar
    console.log(todos);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Nueva tarea');
        const newTodo = {
            id: new Date().getTime(),
            description: 'Nueva tarea',
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        };

        dispatch(action);

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
                                    <button className='btn btn-danger'>Borrar</button>
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

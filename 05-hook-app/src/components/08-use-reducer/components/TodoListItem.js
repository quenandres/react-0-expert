import React from 'react'

export const TodoListItem = ({key, todo, handleToggle, handleDelete}) => {
    return (
        <li 
            className='list-group-item'
            key={ todo.id }
        >
            <p 
                className={`${ todo.done && 'complete' }`}
                onClick={ () => handleToggle(todo.id)}
            > { key + 1 }. { todo.description } </p>
            <button 
                className='btn btn-danger'
                onClick={ () => handleDelete(todo.id) }
            >Borrar</button>
        </li>
    )
}

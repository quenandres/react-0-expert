import React from 'react'

export const TodoListItem = ({todo, handleToggle, handleDelete, i}) => {
    return (
        <li 
            className='list-group-item'
            key={ i }
        >
            <p 
                className={`${ todo.done && 'complete' }`}
                onClick={ () => handleToggle(todo.id)}
            > { i + 1 }. { todo.description } </p>
            <button 
                className='btn btn-danger'
                onClick={ () => handleDelete(todo.id) }
            >Borrar</button>
        </li>
    )
}

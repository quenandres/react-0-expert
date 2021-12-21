const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = (state = initialState, action) => { //Las acciones son las que van a modificar el state
    
    if( action?.type == 'agregar' ){ // Quien va a modificar el state
        return [ ...state, action.payload ]
    }
    
    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}

const action = {
    type: 'agregar',
    payload: newTodo //Estandar para que otros desarrolladores trabajen con el payload
}

todos = todoReducer( todos, action );

console.log(todos);
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 10 }) => {
    /**
     * Tarea:
     * debe mostrar <CounterApp/> correctamente (hacer match con un snapshot) y sus valores por defecto
     * debe mostrar el valor por defecto de 100
     * usar wrapper.find. tomando el elemento html donde se muestra el valor del contador
     */
    // 
    const [ counter, setCounter ] = useState(value); // Primer parametro nombre de la variable, segundo es una funcion que se coloca con set<nombre de la variable>

    // handleAdd
    const handleAdd = (e) => {
        //setCounter( counter + 1 );
        setCounter( c => c + 1 );
    }
    
    const handleReset = () => {
        setCounter( value );
    }
    const handleSubstract = () => {
        setCounter( counter - 1 );
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>0</button>
            <button onClick={ handleSubstract }>-1</button>
        </>)
}

CounterApp.prototypes = {
    value: PropTypes.number.isRequired,
}

export default CounterApp;
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {
    
    // 
    const [ counter, setCounter ] = useState(0); // Primer parametro nombre de la variable, segundo es una funcion que se coloca con set<nombre de la variable>
    console.log(counter);

    // handleAdd
    const handleAdd = (e) => {
        //setCounter( counter + 1 );
        setCounter( c => c + 1 );
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>+1</button>
        </>)
}

CounterApp.prototypes = {
    value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
    value: 0
}

export default CounterApp;
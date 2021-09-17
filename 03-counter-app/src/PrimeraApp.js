import React from 'react';
//import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// Functional components

const PrimeraApp = ({ saludo, subtitulo }) => {

    return (
        <>
            <h1> { saludo } !!</h1>
            {/* <pre>{ JSON.stringify(saludo, null, 3) }</pre> */}
            <p> { subtitulo } </p>
            <p>ad aasa 1 asasas asdasdad</p>
        </>
    );
}

// Tipos de las propiedades que va a recibir el componente
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo ahhh'
}

export default PrimeraApp;
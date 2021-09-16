import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {
    return (<>
    <h1>CounterApp</h1>
    <h2> { value } </h2>
    </>)
}

CounterApp.prototypes = {
    value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
    value: 0
}

export default CounterApp;
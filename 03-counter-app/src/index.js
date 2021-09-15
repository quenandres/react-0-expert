import React from 'react';
import ReactDOM from 'react-dom'

console.log('hola mundo');
const saludo = <h1>Hola</h1>;
console.log(saludo);

const divRoot = document.querySelector('#root');
ReactDOM.render(saludo, divRoot);
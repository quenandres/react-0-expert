import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './examples.css';

export const MultipleCustomHooks = () => {

    const { counter, increment, decrement } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { quote, author } = !!data && data[0];

    return (
        <div>
            <h1>Breaking bad - Custom Hooks !!!</h1>
            <hr />
            {
            loading
            ?
            (
            <div className="alert alert-info text-center">
                Loading...
            </div>
            )
            :
            (
            <blockquote className="blockquote text-right">
                <p className="mb-0">{ quote }</p><br/>
                <footer className="blockquote-footer">{ author }</footer>
            </blockquote>
            )
            }

            {
                counter > 1 &&
                <button className="btn btn-primary" 
                onClick={decrement}    
                >
                    Anterior Frase
                </button>
            }
            {
                counter < 30 &&
                <button className="btn btn-primary" 
                    onClick={increment}
                >
                    Siguiente Frase
                </button>
            }   

        </div>
    )
}

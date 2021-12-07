import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './examples.css';

export const Layout = () => {

    const { counter, increment, decrement } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { quote, author } = !!data && data[0];

    const [boxSize, setBoxSize] = useState({})

    const pTag = useRef();

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])


    return (
        <div>
            <h1>Breaking bad - Layout !!!</h1>
            <hr />
            <blockquote className="blockquote text-right">
                <p 
                    className="mb-0"
                    ref={ pTag }
                >
                    { quote }
                </p>
                <br/>
            </blockquote>

            <pre>
                { JSON.stringify(boxSize, null, 3) }
            </pre>

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

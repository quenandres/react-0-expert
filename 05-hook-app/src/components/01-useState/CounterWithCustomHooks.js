import React from 'react'
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterWithCustomHooks = () => {

    const {state, increment, decrement, reset} = useCounter( 100 );

    return (
        <>
         <h1>Counter with hook: { state }</h1>   
         <hr />
         <button className="btn" onClick={ () => increment()   } > + 1</button>
         <button className="btn" onClick={ () => decrement()   } > - 1</button>
         <button className="btn" onClick={ () => increment(10) } > + 10</button>
         <button className="btn" onClick={ reset } > reset </button>
        </>
    )
}

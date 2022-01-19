import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {    
    const { setUser } = useContext(UserContext);
    return <div>
    <h1>Login screen</h1>
    <button 
        className='btn btn-primary'
        onClick={ () => setUser({
            id: 123,
            name: 'Jhonatan'
        })}
    >
        Asignar
    </button>
    <hr/>
</div>;
};

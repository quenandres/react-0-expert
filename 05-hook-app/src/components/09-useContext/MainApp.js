import React from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

export const MainApp = () => {

    const user = {
        id: 123,
        name:'Andres',
        email: 'Mejia@mail.com'
    }
    return <div>
        <UserContext.Provider value={user}>
            <AppRouter />
        </UserContext.Provider>
    </div>;
};

import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomeScreen = () => {

  const userContext = useContext(UserContext);
  console.log(userContext);

  return <div>
      <h1>Home screen</h1>
      <hr/>
  </div>;
};

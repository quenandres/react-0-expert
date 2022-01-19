import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route    
  } from "react-router-dom";

import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { AboutScreen } from './AboutScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route index element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="*" element={<HomeScreen />} />
        </Routes>
    </BrowserRouter>
    );
};

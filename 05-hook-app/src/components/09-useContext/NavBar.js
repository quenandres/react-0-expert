import React from 'react';
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">useContext</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">        
        <NavLink to="/" activeClassName="active" className="nav-item nav-link">Home</NavLink>
        <NavLink to="/about" activeClassName="active" className="nav-item nav-link">About</NavLink>
        <NavLink to="/login" activeClassName="active" className="nav-item nav-link">Login</NavLink>
      </div>
    </div>
  </nav>  
  );
};

import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/another">Another</NavLink>
        <NavLink to="/about">About</NavLink>
      </ul>
    </header>
  );
};

export default Header;

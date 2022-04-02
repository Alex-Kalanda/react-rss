import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ className }: { className: string }) => {
  return (
    <header className={cn(className, styles.header)}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/another">Another</NavLink>
      <NavLink to="/about">About</NavLink>
    </header>
  );
};

export default Header;

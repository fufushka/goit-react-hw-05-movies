import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <ul className={css.header_nav}>
        <li>
          <NavLink to="/" className={`${css.header_link} ${css.button_38}`}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={`${css.header_link} ${css.button_38}`}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;

import React from 'react';

import { NavLink } from 'react-router-dom';

import navItems from '../../../../configs/navItems';

import styles from './Nav.module.css';

const Nav = () => (
  <nav className={styles.container}>
    <ul className={styles.list}>
      {navItems.map(item => (
        <li className="item" key={item.name}>
          <NavLink exact to={item.to}>
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;

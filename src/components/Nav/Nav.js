import React from 'react';
import { NavLink } from 'react-router-dom';

import navItems from '../../configs/navItems';

import styles from './Nav.module.css';

const Nav = () => (
  <ul className={styles.list}>
    {navItems.map(item => (
      <li className={styles.item} key={item.name}>
        <NavLink
          exact
          to={item.to}
          className={styles.link}
          activeClassName={styles.linkActive}
        >
          {item.name}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default Nav;

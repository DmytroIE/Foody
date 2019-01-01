import React from 'react';

import Nav from '../Nav/Nav';

import styles from './Header.module.css';

const Header = () => (
  <div className={styles.container}>
    <Nav />
  </div>
);

export default Header;

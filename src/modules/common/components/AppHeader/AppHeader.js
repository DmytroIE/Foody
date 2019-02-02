import React from 'react';

import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import Cart from '../Cart/CartContainer';
import UserMenu from '../../../user/components/UserMenu/UserMenu';

import styles from './AppHeader.module.css';

function AppHeader(props) {
  const { avatarSrc, userName } = props;
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.nav}>
        <Nav />
      </div>
      <Link to="/cart">
        <Cart />
      </Link>
      <div className={styles.userMenu}>
        <UserMenu avatarSrc={avatarSrc} userName={userName} />
      </div>
    </header>
  );
}

export default AppHeader;

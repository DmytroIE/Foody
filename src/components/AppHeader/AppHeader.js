import React from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import UserMenu from '../UserMenu/UserMenu';
import styles from './AppHeader.module.css';

const navItems = ['menu', 'about', 'contact', 'delivery'];

function AppHeader(props) {
  const { avatarSrc, userName, logoSrc } = props;
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Logo src={logoSrc} />
      </div>
      <div className={styles.nav}>
        <Nav items={navItems} />
      </div>
      <div className={styles.userMenu}>
        <UserMenu avatarSrc={avatarSrc} userName={userName} />
      </div>
    </header>
  );
}

export default AppHeader;

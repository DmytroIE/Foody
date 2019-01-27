import React from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
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
      <div className={styles.userMenu}>
        <UserMenu avatarSrc={avatarSrc} userName={userName} />
      </div>
    </header>
  );
}

export default AppHeader;

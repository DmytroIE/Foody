import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import UserMenu from './UserMenu';

const navItems = ['menu', 'about', 'contact', 'delivery'];

function AppHeader(props) {
  const { avatarSrc, userName, logoSrc } = props;
  return (
    <header className="header">
      <div className="logo">
        <Logo src={logoSrc} width="100" />
      </div>
      <div className="nav">
        <Nav items={navItems} />
      </div>
      <div className="user-menu">
        <UserMenu avatarSrc={avatarSrc} userName={userName} />
      </div>
    </header>
  );
}

export default AppHeader;

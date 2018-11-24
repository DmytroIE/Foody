import React from 'react';
import Logo from './Logo';
import AppNav from './AppNav';
import UserMenu from './UserMenu';

function AppHeader(props) {
  const { avatarURL = ' ../img/avatar-default.jpg ', userName } = props;
  return (
    <div className="header">
      <Logo />
      <AppNav />
      <UserMenu avatarURL={avatarURL} userName={userName} />
    </div>
  );
}

export default AppHeader;

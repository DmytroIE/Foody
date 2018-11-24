import React from 'react';
import '../img/avatar-default.jpg';

function UserMenu(props) {
  const { avatarURL = 'img/avatar-default.jpg', userName } = props;
  return (
    <div className="user-menu">
      <img className="user-menu__avatar" src={avatarURL} alt="Avatar" />
      <p className="user-menu__name">{userName}</p>
    </div>
  );
}

export default UserMenu;

import React from 'react';

import avatarDefault from './assets/avatar-default.jpg';

function Avatar({ src }) {
  return <img src={src || avatarDefault} alt="Avatar" />;
}

export default Avatar;

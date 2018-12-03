import React from 'react';

import avatarDefault from '../img/avatar-default.jpg';

function Avatar({ src = avatarDefault, width = 60 }) {
  return <img src={src} alt="Avatar" width={width} />;
}

export default Avatar;

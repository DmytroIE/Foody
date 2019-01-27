import React from 'react';

import logo from './assets/logo.png';

function Logo({ src = logo }) {
  return <img src={src} alt="Logo" />;
}

export default Logo;

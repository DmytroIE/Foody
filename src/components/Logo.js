import React from 'react';

function Logo({ src, width = 60 }) {
  return <img src={src} alt="Logo" width={width} />;
}

export default Logo;

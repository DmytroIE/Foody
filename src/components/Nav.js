import React from 'react';

function Nav({ items = [] }) {
  return (
    <nav className="nav">
      <ul className="list">
        {items.map(item => (
          <li className="item" key={item}>
            <a className="link" href="/fff">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;

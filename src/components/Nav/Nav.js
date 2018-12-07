import React from 'react';

import styles from './Nav.module.css';

function Nav({ items = [] }) {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
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

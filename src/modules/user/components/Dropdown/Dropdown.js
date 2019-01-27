import React from 'react';

import { Link } from 'react-router-dom';

import userMenuItems from '../../../../configs/userMenuItems';

import styles from './Dropdown.module.css';

function Dropdown() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {userMenuItems.map(item => (
          <li className="item" key={item.name}>
            <Link to={item.to}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <button type="button">Log out</button>
    </div>
  );
}

export default Dropdown;

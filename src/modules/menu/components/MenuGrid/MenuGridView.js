import React from 'react';
import MenuItemCard from '../MenuCard/MenuCard';

import styles from './MenuGrid.module.css';

const MenuGridView = ({ items = [] }) => {
  console.log('render list');
  return (
    <div className={styles.container}>
      {items.length < 1 ? null : (
        <ul className={styles.list}>
          {items.map(({ id, name, image, price }) => (
            <li className={styles.item} key={id}>
              <MenuItemCard name={name} imageURL={image} price={price} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default MenuGridView;

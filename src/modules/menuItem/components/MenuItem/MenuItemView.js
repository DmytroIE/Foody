import React from 'react';

import styles from './MenuItem.module.css';

const MenuItemView = ({ item = {} }) =>
  Object.keys(item).length > 0 && (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={item.image} alt="Meal" />
      </div>
      <div>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <ul className={styles.list}>
          {item.ingredients.map(i => (
            <li key={i}>{i}</li>
          ))}
        </ul>
        <p>Price: {item.price} грн.</p>
      </div>
    </div>
  );

export default MenuItemView;

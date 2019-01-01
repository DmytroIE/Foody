import React from 'react';

import styles from './MenuCard.module.css';

function MenuItemCard({ name, image, price }) {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={image} alt="Meal" />
      </div>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.price}>Цена {price} грн</p>
    </div>
  );
}

export default MenuItemCard;

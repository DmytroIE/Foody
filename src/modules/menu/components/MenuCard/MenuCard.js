import React from 'react';

import styles from './MenuCard.module.css';

function MenuItemCard({ name, imageURL, price }) {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={imageURL} alt="Meal" />
      </div>
      <h2 className={styles.name}>{name}</h2>
      <span className={styles.price}>Цена {price} грн</span>{' '}
    </div>
  );
}

export default MenuItemCard;

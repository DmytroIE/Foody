import React from 'react';

import styles from './CartRow.module.css';

const CartRow = ({ name, amount, onIncrease, onDecrease, onDelete }) => (
  <div className={styles.container}>
    <button type="button" onClick={onDecrease}>
      -
    </button>
    <p>{name}</p>
    <p>{amount}</p>
    <button type="button" onClick={onIncrease}>
      +
    </button>
    <button type="button" onClick={onDelete}>
      Delete
    </button>
  </div>
);

export default CartRow;

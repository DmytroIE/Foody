import React from 'react';

import CartRow from '../CartRow/CartRow';

import styles from './CartField.module.css';

const CartFieldView = ({
  items = [],
  total,
  onIncrease,
  onDecrease,
  onDelete,
}) => (
  <div className={styles.container}>
    <ul className={styles.list}>
      {items.length > 0 ? (
        items.map(item => (
          <li key={item.id}>
            <CartRow
              name={item.name}
              amount={item.amount}
              onIncrease={() => onIncrease(item.id)}
              onDecrease={() => onDecrease(item.id)}
              onDelete={() => onDelete(item.id)}
            />
          </li>
        ))
      ) : (
        <h2>Корзина пуста</h2>
      )}
    </ul>
    <p>Всего: {total} грн</p>
  </div>
);

export default CartFieldView;

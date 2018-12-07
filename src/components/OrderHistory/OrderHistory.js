import React from 'react';

import RemovableRow from '../RemovableRow/RemovableRow';

import styles from './OrderHistory.module.css';

function OrderHistory(props) {
  const { items, onDelete, onMoreInfo } = props;
  // console.dir(data);
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Дата</th>
          <th>Цена</th>
          <th>Адрес</th>
          <th>Рейтинг</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, date, price, address, rating }) => (
          <RemovableRow
            key={id}
            cells={[date, price, address, rating]}
            onDelete={() => onDelete(id)}
            onMoreInfo={() => onMoreInfo(id)}
          />
        ))}
      </tbody>
    </table>
  );
}

export default OrderHistory;

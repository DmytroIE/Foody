import React from 'react';

import styles from './OrderHistoryTable.module.css';

function OrderHistoryTable(props) {
  const { items, onDelete, onMoreInfo } = props;
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
          <tr key={id}>
            <td>{date}</td>
            <td>{price}</td>
            <td>{address}</td>
            <td>{rating}</td>
            <td>
              <button type="button" onClick={() => onDelete(id)}>
                Delete
              </button>
            </td>
            <td>
              <button type="button" onClick={() => onMoreInfo(id)}>
                More Info
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default OrderHistoryTable;

import React from 'react';
import { Link } from 'react-router-dom';

import MenuItemCard from '../MenuCard/MenuCard';

import styles from './MenuGrid.module.css';

const MenuGridView = ({ items = [], match, location, addToCart }) =>
  items.length < 1 ? null : (
    <ul className={styles.list}>
      {items.map(({ id, name, image, price }) => (
        <li className={styles.item} key={id}>
          <Link
            to={{
              pathname: `${match.url}/${id}`,
              state: { from: location },
            }}
          >
            <MenuItemCard name={name} imageURL={image} price={price} />
          </Link>
          <button type="button" onClick={() => addToCart(id)}>
            Добавить
          </button>
        </li>
      ))}
    </ul>
  );
export default MenuGridView;

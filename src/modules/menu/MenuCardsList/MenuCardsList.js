import React from 'react';
import { Link } from 'react-router-dom';

import MenuCard from '../MenuCard/MenuCard';

const MenuCardsList = ({ items, match, location }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <Link
          to={{
            pathname: `${match.url}/${item.id}`,
            state: { from: location },
          }}
        >
          <MenuCard {...item} />
        </Link>
      </li>
    ))}
  </ul>
);

export default MenuCardsList;

import React from 'react';
import { Link } from 'react-router-dom';

import MenuCard from '../MenuCard/MenuCard';

// import routes from '../../../configs/routes';

// const MenuCardsListView = ({ items }) => (
//   <ul>
//     {items.map(item => (
//       <li key={item.id}>
//         <Link to={`${match.url}/${item.id}`}>
//           <MenuCard {...item} />
//         </Link>
//       </li>
//     ))}
//   </ul>
// );

const MenuCardsListView = ({ items, match, location }) => (
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

export default MenuCardsListView;

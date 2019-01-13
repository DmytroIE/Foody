import React from 'react';

import MenuItem from '../modules/menu-item/MenuItem/MenuItem';
import Comments from '../modules/menu-item/Comments/Comments';

function MenuItemPage(props) {
  const {
    match: {
      params: { id },
    },
    location,
    history,
  } = props;
  return (
    <>
      <button
        type="button"
        onClick={() => {
          if (location.state) {
            history.push(location.state.from);
          } else {
            history.push({ pathname: '/menu', search: '' });
          }
        }}
      >
        Назад к меню
      </button>
      <MenuItem id={id} />
      <Comments />
    </>
  );
}

export default MenuItemPage;

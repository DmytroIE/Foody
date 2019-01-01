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
          history.push(location.state.from);
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

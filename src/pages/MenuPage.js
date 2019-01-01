import React from 'react';
import { Link } from 'react-router-dom';

import MenuFilter from '../modules/menu/MenuFilter/MenuFilter';
import MenuCardsList from '../modules/menu/MenuCardsList/MenuCardsListContainer';

import routes from '../configs/routes';

const MenuPage = props => (
  <>
    <Link to={routes.MENU.add}>Добавить элемент меню</Link>
    <MenuFilter {...props} />
    <MenuCardsList {...props} />
  </>
);

export default MenuPage;

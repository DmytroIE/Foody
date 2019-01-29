import React from 'react';

// import MenuGrid from '../../modules/menu/components/MenuGrid/MenuGrid';
import MenuFilter from '../../modules/menu/components/MenuFilter/MenuFilterContainer';
import MenuCategorySelector from '../../modules/menu/components/MenuCategorySelector/MenuCategorySelectorContainer';
import MenuGrid from '../../modules/menu/components/MenuGrid/MenuGridContainer';

// import { getMenuItems } from '../../services/menuAPI';

// import { normalize } from 'normalizr';
// import { menuItemSchema } from '../../schemas/schemas';

const MenuPage = () => {
  console.log('render menu page');
  return (
    <section>
      <MenuFilter />
      <MenuCategorySelector />
      <MenuGrid />
    </section>
  );
};

export default MenuPage;

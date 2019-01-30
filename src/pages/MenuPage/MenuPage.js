import React from 'react';

import MenuFilter from '../../modules/menu/components/MenuFilter/MenuFilterContainer';
import MenuCategorySelector from '../../modules/menu/components/MenuCategorySelector/MenuCategorySelectorContainer';
import MenuGrid from '../../modules/menu/components/MenuGrid/MenuGridContainer';

const MenuPage = () => {
  console.log('menu page');
  return (
    <section>
      <MenuFilter />
      <MenuCategorySelector />
      <MenuGrid />
    </section>
  );
};

export default MenuPage;

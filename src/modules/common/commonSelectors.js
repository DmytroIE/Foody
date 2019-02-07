export const getItemsEntities = state => state.entities.menuItems;

// test object
export const obj = {
  1: { id: 1, name: 'kolya' },
  2: { id: 2, name: 'petya' },
  3: { id: 3, name: 'vasya' },
  4: { id: 4, name: 'zyuzya' },
};
export const getCategoriesEntities = state =>
  /* obj */ state.entities.menuCategories;

export const getLoadingStatus = state => state.loading;

export const getErrorModals = state => state.modals;

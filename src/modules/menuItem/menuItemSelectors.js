import common from '../common';

export const getMenuItemById = (state, id) => {
  const items = common.selectors.getItemsEntities(state);
  if (!items) {
    return undefined;
  }
  return items[id];
};

export const getMenuItemCategory = (state, id) => {
  const items = common.selectors.getItemsEntities(state);
  const categories = common.selectors.getCategoriesEntities(state);
  if (!items) {
    return undefined;
  }
  const categoryId = items[id].category;
  return categories[categoryId];
};

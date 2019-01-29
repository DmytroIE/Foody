import common from '../common';

export const getMenuItemById = (state, id) => {
  const items = common.selectors.getItemsEntities(state);
  if (!items) {
    return undefined;
  }
  return items[id];
};

export const dummy = () => {};

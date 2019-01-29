import { createSelector } from 'reselect';

import common from '../common';

export const getItemsIDs = state => state.menu.items;
export const getCategoriesIDs = state => state.menu.getCategories;
export const getFilter = state => state.menu.filter.toLowerCase();

export const getCategories = createSelector(
  [common.selectors.getCategoriesEntities],
  categoriesObj => {
    if (!categoriesObj) {
      return undefined;
    }

    const categoriesArray = Object.values(categoriesObj);
    return categoriesArray;
  },
);

export const getMenuItems = createSelector(
  [common.selectors.getItemsEntities, getItemsIDs, getFilter],
  (itemsObj, itemsIDs, filter) => {
    if (!itemsObj) {
      return undefined;
    }

    const itemsArray = itemsIDs.map(id => itemsObj[id]);

    const filteredItemsArray = itemsArray.filter(e =>
      e.name.toLowerCase().includes(filter),
    );

    return filteredItemsArray;
  },
);

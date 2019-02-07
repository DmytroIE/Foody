import { createSelector } from 'reselect';

import common from '../common';

export const getItemsIDs = state => state.menu.items;
export const getCategoriesIDs = state => state.menu.categories;

export const getFilter = state => state.menu.filter.toLowerCase();

// Так не нужно делать, иначе при выборе категории в селекторе только она одна и будет присутствовать
// export const getCategories = createSelector(
//   [common.selectors.getCategoriesEntities, getCategoriesIDs],
//   (categoriesObj, categoriesIDs) => categoriesIDs.map(id => categoriesObj[id]),
// );

// const arr = [{id:1,name:'kolya'}, {id:2,name:'petya'}, {id:3,name:'vasya'}];
export const getCategories = createSelector(
  [common.selectors.getCategoriesEntities, getCategoriesIDs],
  (categoriesObj, categoriesIDs) => categoriesIDs.map(id => categoriesObj[id]),
  // (cats, ids)=>arr,
);

export const getAllMenuItems = createSelector(
  [common.selectors.getItemsEntities, getItemsIDs],
  (itemsObj, itemsIDs) => itemsIDs.map(id => itemsObj[id]),
);

export const getFilteredMenuItems = createSelector(
  [getAllMenuItems, getFilter],
  (itemsArray, filter) =>
    itemsArray.filter(e => e.name.toLowerCase().includes(filter)),
);

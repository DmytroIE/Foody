import { createSelector } from 'reselect';

import { getCategoryFromLocation } from '../../utils/helpers';

const getItemsEntities = state => state.entities.menuItems;
const getCategoriesEntities = state => state.entities.menuCategories;

export const getItemsIDs = state => state.menu.items;
export const getCategoriesIDs = state => state.menu.getCategories;
export const getFilter = state => state.menu.filter.toLowerCase();

export const getCategories = createSelector(
  [getCategoriesEntities],
  categoriesObj => {
    if (!categoriesObj) {
      return undefined;
    }

    const categoriesArray = Object.values(categoriesObj);
    return categoriesArray;
  },
);

// export const getCategories = state => {
//   // debugger
//   if (state && state.entities && state.entities.menuCategories) {
//     const t = Object.values(state.entities.menuCategories);
//     return t;
//   }
// };

export const getMenuItems = createSelector(
  [
    getItemsEntities,
    getCategoriesEntities,
    getFilter,
    (state, { location }) => getCategoryFromLocation(location),
  ],
  (itemsObj, categoriesObj, filter, category) => {
    // debugger;
    if (!itemsObj) {
      return undefined;
    }

    const itemsArray = Object.values(itemsObj); // Если есть опция удаления item, то нужно делать map
    const filteredItemsArray = itemsArray.filter(e =>
      e.name.toLowerCase().includes(filter),
    );
    if (!category) {
      return filteredItemsArray;
    }
    const filteredByCategoryItemsArray = filteredItemsArray.filter(
      e => categoriesObj[e.category].name === category,
    );
    return filteredByCategoryItemsArray;
  },
);

// export const getMenuItems = (state, ownProps) => {
//   //debugger;
//   const { location } = ownProps;
//   const category = getCategoryFromLocation(location);
//   let y, r, t;
//   // по фильтру
//   if (state && state.entities && state.entities.menuItems) {
//     y = Object.values(state.entities.menuItems);
//     r = y.filter(e =>
//       e.name.toLowerCase().includes(getFilter(state).toLowerCase()),
//     );
//     // по категориям
//     if (!category) {
//       return r;
//     }
//     t = r.filter(
//       o => state.entities.menuCategories[o.category].name === category,
//     );
//     return t;
//   }
// }; // временно!!!!

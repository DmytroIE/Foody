import { normalize } from 'normalizr';
import { menuItemSchema } from '../../schemas/schemas';

import * as actionTypes from './menuActionTypes';

export const fetchStart = () => ({
  type: actionTypes.FETCH_START,
});

export const fetchError = error => ({
  type: actionTypes.FETCH_ERROR,
  payload: { error },
});

export const fetchAllSuccess = rawMenu => {
  const normMenu = normalize(rawMenu, [menuItemSchema]);
  // debugger;
  return {
    type: actionTypes.FETCH_ALL_SUCCESS,
    payload: {
      entities: normMenu.entities,
      IDs: {
        menuItems: Object.keys(normMenu.entities.menuItems), // normMenu.result,
        menuCategories: Object.keys(normMenu.entities.menuCategories),
      },
    },
  };
};

export const fetchItemSuccess = rawItem => {
  const item = normalize(rawItem, menuItemSchema);
  return {
    type: actionTypes.FETCH_ITEM_SUCCESS,
    payload: { item },
  };
};

export const changeCategory = newCategory => ({
  type: actionTypes.CHANGE_CATEGORY,
  payload: { newCategory },
});

export const changeFilter = ({ target: { value } }) => ({
  type: actionTypes.CHANGE_FILTER,
  payload: { text: value },
});

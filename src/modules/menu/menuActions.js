import { normalize } from 'normalizr';
import { menuItemSchema, menuCategorySchema } from '../../schemas/schemas';

import * as actionTypes from './menuActionTypes';

const shortID = require('shortid');

export const fetchStart = () => ({
  type: actionTypes.FETCH_START,
});

export const fetchError = error => ({
  type: actionTypes.FETCH_ERROR,
  payload: { message: error.message, uuid: shortID.generate() },
});

export const fetchAllItemsSuccess = rawMenu => {
  const normMenu = normalize(rawMenu, [menuItemSchema]);
  return {
    type: actionTypes.FETCH_SUCCESS_ALL_ITEMS,
    payload: {
      entities: normMenu.entities,
      IDs: {
        menuItems: Object.keys(normMenu.entities.menuItems), // оно же normMenu.result,
        menuCategories: Object.keys(normMenu.entities.menuCategories),
      },
    },
  };
};

export const fetchAllCategoriesSuccess = rawCategories => {
  const normCategories = normalize(rawCategories, [menuCategorySchema]);
  return {
    type: actionTypes.FETCH_SUCCESS_ALL_CATEGORIES,
    payload: {
      entities: normCategories.entities,
      IDs: {
        menuCategories: Object.keys(normCategories.entities.menuCategories),
      },
    },
  };
};

export const changeFilter = ({ target: { value } }) => ({
  type: actionTypes.CHANGE_FILTER,
  payload: { text: value },
});

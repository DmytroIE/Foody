import { combineReducers } from 'redux';

import * as actionTypes from './menuActionTypes';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_SUCCESS_ALL_ITEMS:
      return payload.IDs.menuItems;
    default:
      return state;
  }
};

const categories = (state = [], { type, payload }) => {
  switch (type) {
    // case actionTypes.FETCH_SUCCESS_ALL_ITEMS:
    case actionTypes.FETCH_SUCCESS_ALL_CATEGORIES:
      return payload.IDs.menuCategories;
    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_FILTER:
      return payload.text;
    default:
      return state;
  }
};

export default combineReducers({
  items,
  categories,
  filter,
});

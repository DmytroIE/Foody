import { combineReducers } from 'redux';

import * as actionTypes from './menuActionTypes';

// const entities = (state = {}, action) => {
//   if (action.payload && action.payload.entities)
//     return { ...state, ...action.payload.entities };

//   return state;
// };

const items = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_ALL_SUCCESS:
      return payload.IDs.menuItems;
    default:
      return state;
  }
};

const categories = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_ALL_SUCCESS:
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

const category = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_CATEGORY:
      return payload.newCategory;
    default:
      return state;
  }
};

export default combineReducers({
  // entities,
  items,
  categories,
  filter,
  category,
});

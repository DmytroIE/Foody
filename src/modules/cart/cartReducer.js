import { combineReducers } from 'redux';

import * as actionTypes from './cartActionTypes';

const ids = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TO_CART:
      return state.includes(payload) ? state : [...state, payload];
    case actionTypes.REMOVE_FROM_CART:
      return state.filter(id => id !== payload);
    default:
      return state;
  }
};

const amounts = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TO_CART:
    case actionTypes.INCREASE_AMOUNT:
      return { ...state, [payload]: state[payload] ? state[payload] + 1 : 1 };
    case actionTypes.DECREASE_AMOUNT:
      return {
        ...state,
        [payload]: state[payload] > 0 ? state[payload] - 1 : 0,
      };
    case actionTypes.REMOVE_FROM_CART: {
      const { [payload.toString()]: $, ...newState } = state;
      return newState;
    }
    default:
      return state;
  }
};

export default combineReducers({ ids, amounts });

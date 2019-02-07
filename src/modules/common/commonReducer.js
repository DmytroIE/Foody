import * as actionTypes from './commonActionTypes';

const entities = (state = {}, action) => {
  if (action.payload && action.payload.entities) {
    // console.log('entity reducer spreads entities');
    const newState = {};
    const keys = Object.keys(action.payload.entities);
    keys.forEach(key => {
      newState[key] = { ...state[key], ...action.payload.entities[key] };
    });
    return { ...state, ...newState };
  }

  return state;
};

const loading = (state = false, { type }) => {
  if (type.includes('FETCH_START')) {
    return true;
  }
  // if (type.includes('FETCH_ERROR')) {
  //   return { isLoading: false, error: payload };
  // }
  if (type.includes('FETCH_END')) {
    return false;
  }
  return state;
};

const modals = (state = [], { type, payload }) => {
  if (type === actionTypes.FETCH_ERROR) {
    return [...state, payload];
  }
  if (type === actionTypes.CLOSE_MODAL) {
    const newState = [...state];
    newState.pop();
    return newState;
  }
  return state;
};

export { entities, loading, modals };

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

const loading = (
  state = { isLoading: false, error: null },
  { type, payload },
) => {
  if (type.includes('FETCH_START')) {
    return { isLoading: true, error: null };
  }
  if (type.includes('FETCH_ERROR')) {
    return { isLoading: false, error: payload };
  }
  if (type.includes('FETCH_SUCCESS')) {
    return { isLoading: false, error: null };
  }
  return state;
};

const modals = (state = [], { type, payload }) => {
  if (type.includes('ERROR')) {
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

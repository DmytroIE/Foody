const entities = (state = {}, action) => {
  if (action.payload && action.payload.entities) {
    const newState = {};
    const keys = Object.keys(action.payload.entities);
    keys.forEach(key => {
      newState[key] = { ...state[key], ...action.payload.entities[key] };
    });
    return newState;
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

export { entities, loading };

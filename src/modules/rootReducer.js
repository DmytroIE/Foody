import { combineReducers } from 'redux';

import common from './common/commonReducer';
import menu from './menu/menuReducer';
import user from './user/userReducer';

const entities = (state = {}, action) => {
  if (action.payload && action.payload.entities) {
    const s = { ...state, ...action.payload.entities };
    return s;
  }

  return state;
};

export default combineReducers({ entities, common, menu, user });

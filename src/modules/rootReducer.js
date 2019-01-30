import { combineReducers } from 'redux';

import common from './common';
import menu from './menu';
import cart from './cart';
// import user from './user/userReducer';

export default combineReducers({
  entities: common.reducers.entities,
  loading: common.reducers.loading,
  [menu.NAME]: menu.reducer,
  [cart.NAME]: cart.reducer,
});
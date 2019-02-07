import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from '../modules/rootReducer';

import { loadingSynchronizer } from '../modules/common/commonMiddleware';

const middlewares = applyMiddleware(thunk, loadingSynchronizer);

const store = createStore(rootReducer, composeWithDevTools(middlewares));

export default store;

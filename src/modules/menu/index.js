import * as actions from './menuActions';
import * as actionTypes from './menuActionTypes';
import reducer from './menuReducer';
import * as selectors from './menuSelectors';

const NAME = 'menu';

export default { actionTypes, actions, reducer, selectors, NAME };

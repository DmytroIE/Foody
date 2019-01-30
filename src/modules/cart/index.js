import * as actions from './cartActions';
import * as actionTypes from './cartActionTypes';
import reducer from './cartReducer';
import * as selectors from './cartSelectors';

const NAME = 'cart';

export default { actionTypes, actions, reducer, selectors, NAME };

import { connect } from 'react-redux';

import CartFieldView from './CartFieldView';

import * as selectors from '../../cartSelectors';
import * as actions from '../../cartActions';

const mapProps = state => ({
  items: selectors.getCartItems(state),
  total: selectors.getCartTotal(state),
});

const mapDispatch = {
  onIncrease: actions.increaseAmount,
  onDecrease: actions.decreaseAmount,
  onDelete: actions.removeFromCart,
};

export default connect(
  mapProps,
  mapDispatch,
)(CartFieldView);

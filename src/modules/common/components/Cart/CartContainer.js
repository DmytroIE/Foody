import { connect } from 'react-redux';

import CartView from './CartView';

import cart from '../../../cart';

const mapProps = state => ({
  amount: cart.selectors.getCartAmountsOfSelectedProducts(state),
});

export default connect(mapProps)(CartView);

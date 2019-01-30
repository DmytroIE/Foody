import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import MenuGridView from './MenuGridView';

import { getMenuItems } from '../../menuSelectors';
import { fetchMenuItems } from '../../menuOperations';

import cart from '../../../cart';

import { getCategoryFromLocation } from '../../../../utils/helpers';

class MenuGridContainer extends Component {
  // isNotFirstRender = false;

  componentDidMount() {
    // this.isNotFirstRender = true;
    const { fetchItems, location } = this.props;
    fetchItems(getCategoryFromLocation(location));
  }

  componentDidUpdate(prevProps) {
    const { fetchItems, location } = this.props;
    if (
      getCategoryFromLocation(prevProps.location) ===
      getCategoryFromLocation(location)
    ) {
      return;
    }
    fetchItems(getCategoryFromLocation(location));
  }

  render() {
    const { items, match, location, addToCart } = this.props;
    return (
      // this.isNotFirstRender && (
      <MenuGridView
        items={items}
        match={match}
        location={location}
        addToCart={addToCart}
      />
      // )
    );
  }
}

const mapProps = state => ({
  items: getMenuItems(state),
});

const mapDispatch = {
  fetchItems: fetchMenuItems,
  addToCart: cart.actions.addToCart,
};

export default compose(
  withRouter,
  connect(
    mapProps,
    mapDispatch,
  ),
)(MenuGridContainer);

import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import MenuGridView from './MenuGridView';

import { getMenuItems } from '../../menuSelectors';
import { fetchMenuItems } from '../../menuOperations';

import { getCategoryFromLocation } from '../../../../utils/helpers';

class MenuGridContainer extends Component {
  componentDidMount() {
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
    console.log('render list container');
    const { items, match, location } = this.props;
    return <MenuGridView items={items} match={match} location={location} />;
  }
}

const mapProps = state => ({
  items: getMenuItems(state),
});

const mapDispatch = {
  fetchItems: fetchMenuItems,
};

export default compose(
  withRouter,
  connect(
    mapProps,
    mapDispatch,
  ),
)(MenuGridContainer);

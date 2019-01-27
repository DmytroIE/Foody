import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import MenuGridView from './MenuGridView';

import { getMenuItems } from '../../menuSelectors';
import { fetchAllItems } from '../../menuOperations';

// import { getCategoryFromLocation } from '../../../../utils/helpers';

class MenuGridContainer extends Component {
  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }

  render() {
    console.log('render list container');
    const { items } = this.props;
    return <MenuGridView items={items} />;
  }
}

const mapProps = (state, ownProps) => ({
  items: getMenuItems(state, ownProps),
});

const mapDispatch = {
  fetch: fetchAllItems,
};

export default compose(
  withRouter,
  connect(
    mapProps,
    mapDispatch,
  ),
)(MenuGridContainer);

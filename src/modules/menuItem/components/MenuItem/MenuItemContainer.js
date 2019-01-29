import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { getMenuItemById } from '../../menuItemSelectors';
import { fetchMenuItem } from '../../menuItemOperations';

import MenuItemView from './MenuItemView';

class MenuItemContainer extends Component {
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      fetchItemById,
    } = this.props;

    fetchItemById(id);
  }

  render() {
    const { item } = this.props;
    return <MenuItemView item={item} />;
  }
}

const mapState = (state, props) => ({
  item: getMenuItemById(state, props.match.params.id),
});

const mapDispatch = { fetchItemById: fetchMenuItem };

export default compose(
  withRouter,
  connect(
    mapState,
    mapDispatch,
  ),
)(MenuItemContainer);

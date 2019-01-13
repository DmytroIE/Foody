import React, { Component } from 'react';

// import qs from 'query-string';

import { getCategoryFromLocation } from '../../../utils/helpers';

import MenuCardsListView from './MenuCardsListView';

import {
  getAllMenuItems,
  getMenuItemsWithCategory,
} from '../../../services/api';

// const getCategoryFromLocation = location => {
//   const { category } = qs.parse(location.search);
//   return category || '';
// };

export class MenuCardsListContainer extends Component {
  state = { items: [] };

  componentDidMount() {
    const { location } = this.props;

    this.fetchItems(getCategoryFromLocation(location));
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;

    if (
      getCategoryFromLocation(prevProps.location) ===
      getCategoryFromLocation(location)
    ) {
      return;
    }

    this.fetchItems(getCategoryFromLocation(location));
  }

  fetchItems = async category => {
    try {
      let items;
      if (category === '') {
        items = await getAllMenuItems();
      } else {
        items = await getMenuItemsWithCategory(category);
      }
      this.setState({ items });
    } catch (err) {
      alert(err);
    }
  };

  render() {
    const { location, match } = this.props;
    const { items } = this.state;
    return (
      <MenuCardsListView items={items} location={location} match={match} />
    );
  }
}

export default MenuCardsListContainer;

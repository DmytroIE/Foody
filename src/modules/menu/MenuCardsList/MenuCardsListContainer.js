import React, { Component } from 'react';

import qs from 'query-string';

import MenuCardsListView from './MenuCardsListView';

import { getMenuItemsWithCategory } from '../../../services/api';

const getCategoryFromLocation = location => qs.parse(location.search).category;

export class MenuCardsListContainer extends Component {
  state = { items: [] };

  componentDidMount() {
    const { location, history } = this.props;
    if (!getCategoryFromLocation(location)) {
      history.replace({
        pathname: location.pathname,
        search: 'category=all',
      });
      return;
    }

    this.fetchItems(getCategoryFromLocation(location));
  }

  componentDidUpdate(prevProps) {
    const { location /* , history */ } = this.props;

    // // Слишком много render при нажатии на ссылку
    // // может, как-то по-другому category=all записывать?
    // if (!getCategoryFromLocation(location)) {
    //   history.replace({
    //     pathname: location.pathname,
    //     search: 'category=all',
    //   });
    //   return;
    // }

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
      const items = await getMenuItemsWithCategory(category);
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

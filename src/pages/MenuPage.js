import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MenuFilter from '../modules/menu/MenuFilter/MenuFilter';
import MenuCardsList from '../modules/menu/MenuCardsList/MenuCardsList';

import {
  getAllMenuItems,
  getMenuItemsWithCategory,
  getCategories,
} from '../services/api';

import { getCategoryFromLocation } from '../utils/helpers';

import routes from '../configs/routes';

export class MenuPage extends Component {
  state = { items: [], categories: [] };

  componentDidMount() {
    const { location } = this.props;

    this.fetchItems(getCategoryFromLocation(location));
    this.fetchCategories();
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

  fetchCategories = async () => {
    try {
      const categories = await getCategories();
      this.setState({ categories });
    } catch (err) {
      alert(err);
    }
  };

  onCategoryChange = ({ target: { value } }) => {
    const { location, history } = this.props;
    if (!value) {
      history.push({
        pathname: location.pathname,
        search: ``,
      });
    } else {
      history.push({
        pathname: location.pathname,
        search: `category=${value}`,
      });
    }
  };

  onClearFilter = () => {
    const { location, history } = this.props;
    history.push({
      pathname: location.pathname,
      search: ``,
    });
  };

  render() {
    const { categories, items } = this.state;
    const { location, match } = this.props;
    return (
      <>
        <Link to={routes.MENU.add}>Добавить элемент меню</Link>
        <MenuFilter
          value={getCategoryFromLocation(location)}
          categories={categories}
          onChange={this.onCategoryChange}
          onClear={this.onClearFilter}
        />
        <MenuCardsList items={items} location={location} match={match} />
      </>
    );
  }
}

export default MenuPage;

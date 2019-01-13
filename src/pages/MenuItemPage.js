import React, { Component } from 'react';

import MenuItem from '../modules/menu-item/MenuItem/MenuItem';
import Comments from '../modules/menu-item/Comments/Comments';

import { getMenuItemById } from '../services/api';

class MenuItemPage extends Component {
  state = { item: {} };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    try {
      const item = await getMenuItemById(id);
      this.setState({ item });
    } catch (err) {
      alert(err);
    }
  }

  onGoBack = () => {
    const { location, history } = this.props;
    const { item } = this.state;
    if (location.state) {
      history.push(location.state.from);
    } else {
      history.push({ pathname: '/menu', search: `category=${item.category}` });
    }
  };

  render() {
    const { item } = this.state;
    return (
      <>
        <button type="button" onClick={this.onGoBack}>
          Назад к меню
        </button>
        <MenuItem item={item} />
        <Comments />
      </>
    );
  }
}

export default MenuItemPage;

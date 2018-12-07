import React, { Component } from 'react';

import MenuGrid from '../MenuGrid/MenuGrid';

import { getMenuItems } from '../../services/menuAPI';

class MenuPage extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    getMenuItems().then(data => this.setState({ items: data }));
  }

  render() {
    const { items } = this.state;
    return (
      <section>
        <MenuGrid items={items} />
      </section>
    );
  }
}

export default MenuPage;

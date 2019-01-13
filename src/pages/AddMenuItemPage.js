import React, { Component } from 'react';

import AddForm from '../modules/menu-item/AddForm/AddForm';

import { createNewMenuItem, getCategories } from '../services/api';

import routes from '../configs/routes';

class AddMenuItemPage extends Component {
  state = {};

  async componentDidMount() {
    try {
      const categories = await getCategories();
      this.setState({ categories });
    } catch (err) {
      alert(err);
    }
  }

  handleCreateItem = async createdItem => {
    try {
      const { history } = this.props;
      await createNewMenuItem(createdItem);
      history.push(routes.MENU.root);
    } catch (err) {
      alert(err);
    }
  };

  render() {
    const { categories } = this.state;
    return (
      <>
        <AddForm categories={categories} onSubmit={this.handleCreateItem} />
      </>
    );
  }
}

export default AddMenuItemPage;

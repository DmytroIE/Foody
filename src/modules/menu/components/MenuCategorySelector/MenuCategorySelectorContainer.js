import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { getCategories } from '../../menuSelectors';
import { fetchMenuCategories } from '../../menuOperations';

import { getCategoryFromLocation } from '../../../../utils/helpers';

import MenuCategorySelectorView from './MenuCategorySelectorView';

class MenuCategorySelectorContainer extends Component {
  componentDidMount() {
    // console.log('category mounted');
    const { fetchCategories } = this.props;
    fetchCategories();
  }

  shouldComponentUpdate(nextProps) {
    const { categories } = this.props;
    console.log('MenuCategory', nextProps.categories === categories);
    console.log(categories);
    console.log(nextProps.categories);
    return true;
  }

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

  onClear = () => {
    const { location, history } = this.props;
    if (!getCategoryFromLocation(location)) return; // чтобы при холостом нажатии на кнопку не перерендеривалась вся страница каждый раз
    history.push({
      pathname: location.pathname,
      search: ``,
    });
  };

  render() {
    // console.log('render category');
    const { location, categories } = this.props;
    return (
      <MenuCategorySelectorView
        value={getCategoryFromLocation(location)}
        categories={categories}
        onChange={this.onCategoryChange}
        onClear={this.onClear}
      />
    );
  }
}

const mapState = state => ({
  categories: getCategories(state),
});

const mapDispatch = {
  fetchCategories: fetchMenuCategories,
};

export default compose(
  withRouter,
  connect(
    mapState,
    mapDispatch,
  ),
)(MenuCategorySelectorContainer);

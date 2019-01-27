import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { getCategories } from '../../menuSelectors';

import { getCategoryFromLocation } from '../../../../utils/helpers';

import MenuCategorySelectorView from './MenuCategorySelectorView';

class MenuCategorySelectorContainer extends Component {
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
    if (!getCategoryFromLocation(location)) return; // чтобы при холостом нажатии на кнопку не перерендеривалась вся страница каждый раз
    history.push({
      pathname: location.pathname,
      search: ``,
    });
  };

  render() {
    const { location, categories } = this.props;
    return (
      <MenuCategorySelectorView
        value={getCategoryFromLocation(location)}
        categories={categories}
        onChange={this.onCategoryChange}
        onClear={this.onClearFilter}
      />
    );
  }
}

const mapProps = state => ({
  categories: getCategories(state),
});

export default compose(
  withRouter,
  connect(mapProps),
)(MenuCategorySelectorContainer);

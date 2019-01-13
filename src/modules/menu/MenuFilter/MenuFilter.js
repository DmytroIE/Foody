import React, { Component } from 'react';

import { getCategoryFromLocation } from '../../../utils/helpers';

// import qs from 'query-string';

import { getCategories } from '../../../services/api';

// const getCategoryFromLocation = location => {
//   const { category } = qs.parse(location.search);
//   return category || '';
// };

class MenuFilter extends Component {
  state = { categories: [] };

  async componentDidMount() {
    try {
      const categories = await getCategories();
      this.setState({ categories });
    } catch (err) {
      alert(err);
    }
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

  onClearFilter = () => {
    const { location, history } = this.props;
    history.push({
      pathname: location.pathname,
      search: ``,
    });
  };

  render() {
    const { location } = this.props;
    const { categories } = this.state;
    return (
      <>
        <select
          value={getCategoryFromLocation(location)}
          onChange={this.onCategoryChange}
        >
          <option key={-1} value="">
            All
          </option>
          {categories.map(category => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <button type="button" onClick={this.onClearFilter}>
          Очистить
        </button>
      </>
    );
  }
}

export default MenuFilter;

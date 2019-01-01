import React, { Component } from 'react';

import qs from 'query-string';

import { getCategories } from '../../../services/api';

const getCategoryFromLocation = location => qs.parse(location.search).category;

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
    history.push({
      pathname: location.pathname,
      search: `category=${value}`,
    });
  };

  render() {
    const { location } = this.props;
    const { categories } = this.state;
    return (
      <select
        value={getCategoryFromLocation(location)}
        onChange={this.onCategoryChange}
      >
        <option key={-1} value="all">
          All
        </option>
        {categories.map(category => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    );
  }
}

export default MenuFilter;

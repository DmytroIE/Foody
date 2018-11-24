import React, { Component } from 'react';
import MenuItemCard from './MenuItemCard';

class MenuGrid extends Component {
  state = {
    filterString: 'Салат',
  };

  onFilterFieldChange = ({ target }) => {
    const newFilterString = target.value;
    this.setState({ filterString: newFilterString });
  };

  render() {
    const { filterString } = this.state;
    const { items } = this.props;
    return (
      <div>
        <input
          type="text"
          onChange={this.onFilterFieldChange}
          value={filterString}
        />
        {!items || items.length < 1 ? null : (
          <ul className="menu-grid">
            {items.map(({ id, name, image, price }) =>
              !name
                .toLowerCase()
                .includes(filterString.toLowerCase()) ? null : (
                <li className="menu-grid__item" key={id}>
                  <MenuItemCard name={name} imageURL={image} price={price} />
                </li>
              ),
            )}
          </ul>
        )}
      </div>
    );
  }
}

export default MenuGrid;

import React, { Component } from 'react';
import MenuItemCard from '../MenuCard/MenuCard';

import styles from './MenuGrid.module.css';

class MenuGrid extends Component {
  state = {
    filterString: '',
  };

  onFilterFieldChange = ({ target }) => {
    const newFilterString = target.value;
    this.setState({ filterString: newFilterString });
  };

  render() {
    const { filterString } = this.state;
    const { items } = this.props;
    return (
      <div className={styles.container}>
        <input
          type="text"
          onChange={this.onFilterFieldChange}
          value={filterString}
        />
        {!items || items.length < 1 ? null : (
          <ul className={styles.list}>
            {items.map(({ id, name, image, price }) =>
              !name
                .toLowerCase()
                .includes(filterString.toLowerCase()) ? null : (
                <li className={styles.item} key={id}>
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

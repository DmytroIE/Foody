import React, { Component } from 'react';

import { getMenuItemById } from '../../../services/api';

import styles from './MenuItem.module.css';

class MenuItem extends Component {
  state = { item: {} };

  async componentDidMount() {
    const { id } = this.props;

    try {
      const item = await getMenuItemById(id);
      this.setState({ item });
    } catch (err) {
      alert(err);
    }
  }

  render() {
    const { item } = this.state;
    return (
      Object.keys(item).length > 0 && (
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <img src={item.image} alt="Meal" />
          </div>
          <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <ul className={styles.list}>
              {item.ingredients.map(i => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <p>Price: {item.price} грн.</p>
          </div>
        </div>
      )
    );
  }
}

export default MenuItem;

import React, { Component } from 'react';

import { createNewMenuItem, getCategories } from '../../../services/api';

import styles from './AddForm.module.css';

import routes from '../../../configs/routes';

class AddForm extends Component {
  state = {
    createdItem: {
      name: '',
      description: '',
      image: '',
      price: 0,
      category: '',
      ingredients: [],
    },
    categories: [],
  };

  async componentDidMount() {
    try {
      const categories = await getCategories();
      this.setState({ categories });
    } catch (err) {
      alert(err);
    }
  }

  handleCreateItem = async evt => {
    evt.preventDefault();
    const { createdItem } = this.state;
    const { history } = this.props;
    await createNewMenuItem(createdItem);
    history.push(routes.MENU.root);
  };

  handleInputChange = (name, value) => {
    const { createdItem } = this.state;
    this.setState({ createdItem: { ...createdItem, [name]: value } });
  };

  // handleInputChange = ({ target: { name, value } }) => {
  //   const { createdItem } = this.state;
  //   this.setState({ createdItem: { ...createdItem, [name]: value } });
  // };

  render() {
    const { createdItem, categories } = this.state;

    return (
      <form onSubmit={this.handleCreateItem}>
        <label htmlFor="name" className={styles.inputlabel}>
          Название
          <input
            required
            name="name"
            type="text"
            size="40"
            value={createdItem.name}
            onChange={({ target: { name, value } }) =>
              this.handleInputChange(name, value)
            }
          />
        </label>
        <label htmlFor="description" className={styles.inputlabel}>
          Описание
          <textarea
            required
            name="description"
            rows="5"
            cols="30"
            value={createdItem.description}
            onChange={({ target: { name, value } }) =>
              this.handleInputChange(name, value)
            }
          />
        </label>
        <label htmlFor="image" className={styles.inputlabel}>
          Ссылка на изображение
          <input
            required
            name="image"
            type="url"
            size="25"
            value={createdItem.image}
            onChange={({ target: { name, value } }) =>
              this.handleInputChange(name, value)
            }
          />
        </label>
        <label htmlFor="price" className={styles.inputlabel}>
          Цена
          <input
            name="price"
            type="number"
            min="0"
            value={createdItem.price}
            onChange={({ target: { name, value } }) =>
              this.handleInputChange(name, value)
            }
          />
        </label>
        <label htmlFor="category" className={styles.inputlabel}>
          Категория
          <select
            value={createdItem.category}
            onChange={({ target: { name, value } }) =>
              this.handleInputChange(name, value)
            }
            name="category"
          >
            <option key={-1} disabled />
            {categories.map(category => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="ingredients" className={styles.inputlabel}>
          Ингредиенты
          <textarea
            required
            name="ingredients"
            rows="5"
            cols="30"
            value={createdItem.ingredients.join(' ')}
            onChange={({ target: { name, value } }) =>
              this.handleInputChange(name, value.split(' '))
            }
            placeholder="Введите ингредиенты через пробел..."
          />
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}

export default AddForm;

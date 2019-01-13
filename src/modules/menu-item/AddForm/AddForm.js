import React, { Component } from 'react';

import styles from './AddForm.module.css';

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
  };

  handleInputChange = (name, value) => {
    const { createdItem } = this.state;
    this.setState({ createdItem: { ...createdItem, [name]: value } });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { createdItem } = this.state;
    const { onSubmit } = this.props;
    onSubmit(createdItem);
  };

  render() {
    const { createdItem } = this.state;
    const { categories = [] } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
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

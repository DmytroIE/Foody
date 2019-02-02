import React, { Component } from 'react';

import styles from './CreateRecordForm.module.css';

class CreateRecordForm extends Component {
  state = { date: '', price: '', address: '', rating: '' };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state);
  };

  render() {
    const { date, price, address, rating } = this.state;
    const { onClose } = this.props;
    return (
      <div className={styles.backdrop}>
        <div className={styles.container}>
          <p className={styles.title}>Добавьте новую запись</p>
          <form type="submit" onSubmit={this.handleSubmit}>
            <label htmlFor="date" className={styles.inputlabel}>
              Дата
              <input
                name="date"
                type="date"
                value={date}
                onChange={this.handleInputChange}
              />
            </label>
            <label htmlFor="price" className={styles.inputlabel}>
              Стоимость
              <input
                name="price"
                type="number"
                min="0"
                value={price}
                onChange={this.handleInputChange}
              />
            </label>
            <label htmlFor="address" className={styles.inputlabel}>
              Адрес
              <input
                name="address"
                type="text"
                value={address}
                onChange={this.handleInputChange}
              />
            </label>
            <label htmlFor="rating" className={styles.inputlabel}>
              Рейтинг
              <input
                name="rating"
                type="number"
                min="0"
                max="10"
                value={rating}
                onChange={this.handleInputChange}
              />
            </label>
            <input type="submit" value="Создать" />
            <button type="button" onClick={onClose}>
              Отмена
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateRecordForm;

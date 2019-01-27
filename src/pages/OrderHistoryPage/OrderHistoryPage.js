import React, { Component } from 'react';

import OrderHistory from '../../modules/orderHistory/components/OrderHistory/OrderHistory';
import Modal from '../../modules/common/components/Modal/Modal';
import Spinner from '../../modules/common/components/Spinner/Spinner';

import styles from './OrderHistoryPage.module.css';

import {
  getOrderHistoryItems,
  getOrderHistoryItemByID,
  createOrderHistoryItem,
  deleteOrderHistoryItem,
} from '../../services/orderHistoryAPI';

class OrderHistoryPage extends Component {
  state = {
    items: [],
    isInfoModalShown: false,
    infoModalText: '',
    isCreateModalShown: false,
    createdItem: { date: '', price: '', address: '', rating: '' },
    isSpinnerShown: false,
  };

  componentDidMount() {
    getOrderHistoryItems()
      .then(data => this.setState({ items: data }))
      .catch(err => this.showInfoModal(err.message));
  }

  handleItemDelete = id => {
    this.setState({ isSpinnerShown: true });
    deleteOrderHistoryItem(id)
      .then(() => {
        this.setState(state => ({
          items: state.items.filter(item => item.id !== id),
          isSpinnerShown: false,
        }));
      })
      .catch(err => {
        this.setState({ isSpinnerShown: false });
        this.showInfoModal(err.message);
      });
  };

  handleMoreInfo = id => {
    this.setState({ isSpinnerShown: true });
    getOrderHistoryItemByID(id)
      .then(data => {
        this.setState({ isSpinnerShown: false });
        this.showInfoModal(JSON.stringify(data));
      })
      .catch(err => {
        this.setState({ isSpinnerShown: false });
        this.showInfoModal(err.message);
      });
  };

  showInfoModal = text => {
    this.setState({
      isInfoModalShown: true,
      infoModalText: text,
    });
  };

  closeInfoModal = () => {
    this.setState({
      isInfoModalShown: false,
      infoModalText: '',
    });
  };

  handleInputChange = ({ target: { name, value } }) => {
    const { createdItem } = this.state;
    this.setState({ createdItem: { ...createdItem, [name]: value } });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.closeCreateModal();
    this.setState({ isSpinnerShown: true });

    const { createdItem } = this.state;
    createOrderHistoryItem(createdItem)
      .then(data => {
        this.setState({ isSpinnerShown: false });
        this.setState(state => ({ items: [...state.items, data] }));
      })
      .catch(err => {
        this.setState({ isSpinnerShown: false });
        this.showInfoModal(err.message);
      });
  };

  showCreateModal = () => {
    this.setState({
      isCreateModalShown: true,
    });
  };

  closeCreateModal = () => {
    this.setState({
      isCreateModalShown: false,
    });
  };

  render() {
    const {
      items,
      isInfoModalShown,
      infoModalText,
      isCreateModalShown,
      createdItem,
      isSpinnerShown,
    } = this.state;
    return (
      <section>
        <div className={styles.tableContainer}>
          <OrderHistory
            items={items}
            onDelete={this.handleItemDelete}
            onMoreInfo={this.handleMoreInfo}
          />
          <button type="button" onClick={this.showCreateModal}>
            Добавить запись
          </button>
        </div>
        {isInfoModalShown && (
          <Modal onClose={this.closeInfoModal}>
            <p>{infoModalText} </p>
          </Modal>
        )}

        {isCreateModalShown && (
          <Modal onClose={this.closeCreateModal}>
            <p>Добавьте новую запись</p>
            <form type="submit" onSubmit={this.handleSubmit}>
              <label htmlFor="date" className={styles.inputlabel}>
                Дата
                <input
                  name="date"
                  type="date"
                  value={createdItem.date}
                  onChange={this.handleInputChange}
                />
              </label>
              <label htmlFor="price" className={styles.inputlabel}>
                Стоимость
                <input
                  name="price"
                  type="number"
                  min="0"
                  value={createdItem.price}
                  onChange={this.handleInputChange}
                />
              </label>
              <label htmlFor="address" className={styles.inputlabel}>
                Адрес
                <input
                  name="address"
                  type="text"
                  value={createdItem.address}
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
                  value={createdItem.rating}
                  onChange={this.handleInputChange}
                />
              </label>
              <input type="submit" value="Создать" />
            </form>
          </Modal>
        )}
        {isSpinnerShown && <Spinner />}
      </section>
    );
  }
}

export default OrderHistoryPage;

import React, { Component } from 'react';

import { connect } from 'react-redux';

import orderHistory from '../../modules/orderHistory';

import OrderHistoryTable from '../../modules/orderHistory/components/OrderHistoryTable/OrderHistoryTable';
import CreateRecordForm from '../../modules/orderHistory/components/CreateRecordForm/CreateRecordForm';

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
    isCreateFormShown: false,
  };

  async componentDidMount() {
    const { fetchStart, fetchSuccess, fetchError } = this.props;
    fetchStart();
    try {
      const data = await getOrderHistoryItems();
      this.setState({ items: data });
      fetchSuccess();
    } catch (error) {
      fetchError(error);
    }
  }

  handleItemDelete = async id => {
    const { fetchStart, fetchSuccess, fetchError } = this.props;
    fetchStart();
    try {
      await deleteOrderHistoryItem(id);
      this.setState(state => ({
        items: state.items.filter(item => item.id !== id),
      }));
      fetchSuccess();
    } catch (error) {
      fetchError(error);
    }
  };

  handleMoreInfo = async id => {
    const { fetchStart, fetchSuccess, fetchError } = this.props;
    fetchStart();
    try {
      const data = await getOrderHistoryItemByID(id);
      fetchSuccess();
      alert(data);
    } catch (error) {
      fetchError(error);
    }
  };

  handleCreateItem = async item => {
    this.setState({ isCreateFormShown: false });
    const { fetchStart, fetchSuccess, fetchError } = this.props;
    const { items } = this.state;
    fetchStart();
    try {
      const newItem = await createOrderHistoryItem(item);
      this.setState({ items: [...items, newItem] });
      fetchSuccess();
    } catch (error) {
      fetchError(error);
    }
  };

  showCreateForm = () => {
    this.setState({ isCreateFormShown: true });
  };

  closeCreateForm = () => {
    this.setState({ isCreateFormShown: false });
  };

  render() {
    const { items, isCreateFormShown } = this.state;
    return (
      <section>
        <div className={styles.tableContainer}>
          <OrderHistoryTable
            items={items}
            onDelete={this.handleItemDelete}
            onMoreInfo={this.handleMoreInfo}
          />
          <button type="button" onClick={this.showCreateForm}>
            Добавить запись
          </button>
        </div>
        {isCreateFormShown && (
          <CreateRecordForm
            onSubmit={this.handleCreateItem}
            onClose={this.closeCreateForm}
          />
        )}
      </section>
    );
  }
}

const mapDispatch = {
  fetchStart: orderHistory.actions.fetchStart,
  fetchSuccess: orderHistory.actions.fetchSuccess,
  fetchError: orderHistory.actions.fetchError,
};

export default connect(
  null,
  mapDispatch,
)(OrderHistoryPage);

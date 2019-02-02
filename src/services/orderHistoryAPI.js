import axios from 'axios';

import { baseURL, timeout } from './defaults';

axios.defaults.baseURL = baseURL;
axios.defaults.timeout = timeout;

const getOrderHistoryItems = async () => {
  const response = await axios.get('/orderHistory');
  return response.data;
};

const getOrderHistoryItemByID = async id => {
  const response = await axios.get(`/orderHistory/${id}`);
  return response.data;
};

const createOrderHistoryItem = async item => {
  const response = await axios.post(`/orderHistory`, item);
  return response.data;
};

const deleteOrderHistoryItem = async id => {
  const response = await axios.delete(`/orderHistory/${id}`);
  console.log(response);
  return true;
};

export {
  getOrderHistoryItems,
  getOrderHistoryItemByID,
  createOrderHistoryItem,
  deleteOrderHistoryItem,
};

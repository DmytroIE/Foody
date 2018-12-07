import axios from 'axios';

const BASE_URL = 'http://localhost:4000/orderHistory';

const getOrderHistoryItems = () =>
  axios.get(`${BASE_URL}`).then(response => {
    if (response.status !== 200) {
      throw new Error(response.statusText);
    } else return response.data;
  });

const getOrderHistoryItemByID = id =>
  axios.get(`${BASE_URL}/${id}`).then(response => {
    if (response.status !== 200) {
      throw new Error(response.statusText);
    } else return response.data;
  });

const createOrderHistoryItem = item =>
  axios.post(BASE_URL, item).then(response => {
    console.log(response);
    if (response.status !== 201) {
      throw new Error(response.statusText);
    } else return response.data;
  });

const deleteOrderHistoryItem = id =>
  axios.delete(`${BASE_URL}/${id}`).then(response => {
    if (response.status !== 200) {
      throw new Error(response.statusText);
    } else return true;
  });

export {
  getOrderHistoryItems,
  getOrderHistoryItemByID,
  createOrderHistoryItem,
  deleteOrderHistoryItem,
};

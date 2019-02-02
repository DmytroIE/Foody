import axios from 'axios';

import { baseURL, timeout } from './defaults';

axios.defaults.baseURL = baseURL;
axios.defaults.timeout = timeout;

const getAllMenuItems = async () => {
  const response = await axios.get('/menu');
  return response.data;
};

const getAllCategories = async () => {
  const response = await axios.get('/categories');
  return response.data;
};

const getMenuItemsByCategory = async category => {
  const response = await axios.get(`/menu?category.name=${category}`);
  return response.data;
};

const getMenuItemById = async id => {
  const response = await axios.get(`/menu/${id}`);
  return response.data;
};

export {
  getAllMenuItems,
  getAllCategories,
  getMenuItemsByCategory,
  getMenuItemById,
};

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';

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

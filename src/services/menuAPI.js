import axios from 'axios';

const BASE_URL = 'http://localhost:4000/menu';

const getMenuItems = () =>
  axios.get(`${BASE_URL}`).then(response => {
    if (response.status !== 200) {
      throw new Error(response.statusText);
    } else return response.data;
  });

const getMenuItemByID = id =>
  axios.get(`${BASE_URL}/${id}`).then(response => {
    if (response.status !== 200) {
      throw new Error(response.statusText);
    } else return response.data;
  });

export { getMenuItems, getMenuItemByID };

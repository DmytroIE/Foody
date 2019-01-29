import {
  getAllMenuItems,
  getAllCategories,
  getMenuItemsByCategory,
} from '../../services/menuAPI';
import * as actions from './menuActions';

export const fetchMenuItems = category => async dispatch => {
  dispatch(actions.fetchStart());
  try {
    let data;
    if (!category) {
      data = await getAllMenuItems();
    } else {
      data = await getMenuItemsByCategory(category);
    }
    dispatch(actions.fetchAllItemsSuccess(data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

export const fetchCatedories = () => async dispatch => {
  dispatch(actions.fetchStart());
  try {
    const data = await getAllCategories();
    dispatch(actions.fetchAllCategoriesSuccess(data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

// export const fetchMenuItemsByCategory = category => async dispatch => {
//   dispatch(actions.fetchStart());

//   try {
//     const data = await getMenuItemsByCategory(category);
//     dispatch(actions.fetchAllSuccess(data));
//   } catch (error) {
//     dispatch(actions.fetchError(error));
//   }
// };

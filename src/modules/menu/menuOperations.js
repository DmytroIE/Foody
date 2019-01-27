import { getMenuItems, getMenuItemByID } from '../../services/menuAPI';
import * as actions from './menuActions';

export const fetchAllItems = () => async dispatch => {
  dispatch(actions.fetchStart());

  try {
    const data = await getMenuItems();
    // debugger
    dispatch(actions.fetchAllSuccess(data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

export const fetchItem = id => async dispatch => {
  dispatch(actions.fetchStart());

  try {
    const data = await getMenuItemByID(id);
    dispatch(actions.fetchItemSuccess(data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

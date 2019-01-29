import { getMenuItemById } from '../../services/menuAPI';
import * as actions from './meniItemActions';

export const fetchMenuItem = id => async dispatch => {
  dispatch(actions.fetchStart());

  try {
    const data = await getMenuItemById(id);
    dispatch(actions.fetchItemSuccess(data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

export const dummy = () => {};

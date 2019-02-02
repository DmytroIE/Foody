import { normalize } from 'normalizr';
import { menuItemSchema } from '../../schemas/schemas';

import * as actionTypes from './meniItemActionTypes';

const shortID = require('shortid');

export const fetchStart = () => ({
  type: actionTypes.FETCH_START,
});

export const fetchError = error => ({
  type: actionTypes.FETCH_ERROR,
  payload: { message: error.message, uuid: shortID.generate() },
});

export const fetchItemSuccess = rawItem => {
  const item = normalize(rawItem, menuItemSchema);
  return {
    type: actionTypes.FETCH_SUCCESS_ITEM,
    payload: item,
  };
};

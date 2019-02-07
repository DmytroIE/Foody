import * as actionTypes from './commonActionTypes';

const shortID = require('shortid');

export const closeModal = () => ({
  type: actionTypes.CLOSE_MODAL,
});

export const fetchEnd = () => ({
  type: actionTypes.FETCH_END,
});

export const fetchError = errorStr => ({
  type: actionTypes.FETCH_ERROR,
  payload: { message: errorStr, uuid: shortID.generate() },
});

import * as actionTypes from './orderHistoryActionTypes';

const shortID = require('shortid');

export const fetchStart = () => ({
  type: actionTypes.FETCH_START,
});

export const fetchError = error => ({
  type: actionTypes.FETCH_ERROR,
  payload: { message: error.message, uuid: shortID.generate() },
});

export const fetchSuccess = () => ({
  type: actionTypes.FETCH_SUCCESS,
});

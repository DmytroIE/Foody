import * as actionTypes from './orderHistoryActionTypes';

export const fetchStart = () => ({
  type: actionTypes.FETCH_START,
});

export const fetchError = error => ({
  type: actionTypes.FETCH_ERROR,
  payload: error.message,
});

export const fetchSuccess = () => ({
  type: actionTypes.FETCH_SUCCESS,
});

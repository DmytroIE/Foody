import { fetchEnd, fetchError } from './commonActions';

let numberOfActiveLoadings = 0;
const fetchErrorsObj = {};

export const loadingSynchronizer = () => next => action => {
  if (numberOfActiveLoadings === 0 && action.type.includes('FETCH_START')) {
    numberOfActiveLoadings += 1;
    next(action);
    return;
  }

  if (numberOfActiveLoadings > 0) {
    if (action.type.includes('FETCH_START')) {
      numberOfActiveLoadings += 1;
      return;
    }

    if (action.type.includes('FETCH_SUCCESS') && numberOfActiveLoadings > 0) {
      numberOfActiveLoadings -= 1;
      next(action);
    }

    if (action.type.includes('FETCH_ERROR') && numberOfActiveLoadings > 0) {
      numberOfActiveLoadings -= 1;
      fetchErrorsObj[action.payload] = true; // склеиваем одинаковые сообщения
    }

    if (numberOfActiveLoadings === 0) {
      next(fetchEnd());
      const errorMessageArr = Object.keys(fetchErrorsObj);
      if (errorMessageArr.length > 0) {
        const errorMessageStr = errorMessageArr.reduce(
          (acc, curr) => `${acc}\n${curr}`,
          '',
        );
        next(fetchError(errorMessageStr));
      }
      return;
    }
    return;
  }

  next(action);
};

export const dummy = () => {};

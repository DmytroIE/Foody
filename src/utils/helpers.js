import qs from 'query-string';

export const getCategoryFromLocation = location => {
  const { category } = qs.parse(location.search);
  return category || '';
};

export const dummy = () => {};

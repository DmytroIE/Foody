import { createSelector } from 'reselect';

import common from '../common';

export const getCartIds = state => state.cart.ids;
export const getCartAmounts = state => state.cart.amounts;

export const getCartItems = createSelector(
  [getCartIds, common.selectors.getItemsEntities, getCartAmounts],
  (ids, entities, amounts) =>
    ids.map(id => ({
      id,
      name: entities[id].name,
      price: entities[id].price,
      amount: amounts[id],
    })),
);

export const getCartTotal = createSelector(
  [getCartIds, common.selectors.getItemsEntities, getCartAmounts],
  (ids, entities, amounts) => {
    const p = ids.reduce(
      (acc, id) => acc + entities[id].price * amounts[id],
      0,
    );
    return p;
  },
);

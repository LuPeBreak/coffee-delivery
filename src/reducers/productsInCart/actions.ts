import { ProductState } from './reducer'

/* eslint-disable no-unused-vars */
export enum ActionTypes {
  ADD_NEW_PRODUCT_TO_CART = 'ADD_NEW_PRODUCT_TO_CART',
}

export function addNewCycleAction(newProduct: ProductState) {
  return {
    type: ActionTypes.ADD_NEW_PRODUCT_TO_CART,
    payload: {
      newProduct,
    },
  }
}

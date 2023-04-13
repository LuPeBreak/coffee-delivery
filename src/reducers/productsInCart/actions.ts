import { ProductState } from './reducer'

/* eslint-disable no-unused-vars */
export enum ActionTypes {
  ADD_NEW_PRODUCT_TO_CART = 'ADD_NEW_PRODUCT_TO_CART',
  CHANGE_PRODUCT_QUANTITY = 'CHANGE_PRODUCT_QUANTITY',
  REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART',
}

export function addNewProductAction(newProduct: ProductState) {
  return {
    type: ActionTypes.ADD_NEW_PRODUCT_TO_CART,
    payload: {
      newProduct,
    },
  }
}

export function changeProductQuantityAction(id: number, quantity: number) {
  return {
    type: ActionTypes.CHANGE_PRODUCT_QUANTITY,
    payload: {
      id,
      quantity,
    },
  }
}

export function removeProductFromCartAction(id: number) {
  return {
    type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: {
      id,
    },
  }
}

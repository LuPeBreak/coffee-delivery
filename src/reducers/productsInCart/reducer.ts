import { ActionTypes } from './actions'
import { produce } from 'immer'

export interface ProductState {
  id: number
  title: string
  imageURL: string
  quantity: number
  price: number
}
export function productsInCartReducer(state: ProductState[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_PRODUCT_TO_CART: {
      const productIndex = state.findIndex(
        (product) => product.id === action.payload.newProduct.id,
      )
      const isProductInCart = productIndex >= 0
      return produce(state, (draft) => {
        if (isProductInCart) {
          draft[productIndex].quantity += action.payload.newProduct.quantity
        } else {
          draft.push(action.payload.newProduct)
        }
      })
    }
    case ActionTypes.CHANGE_PRODUCT_QUANTITY: {
      const productIndex = state.findIndex(
        (product) => product.id === action.payload.id,
      )
      const isProductInCart = productIndex >= 0
      const newProductQuantity =
        state[productIndex].quantity + action.payload.quantity
      return produce(state, (draft) => {
        if (isProductInCart && newProductQuantity >= 1) {
          draft[productIndex].quantity = newProductQuantity
        }
      })
    }
    case ActionTypes.REMOVE_PRODUCT_FROM_CART: {
      const productIndex = state.findIndex(
        (product) => product.id === action.payload.id,
      )
      const isProductInCart = productIndex >= 0
      return produce(state, (draft) => {
        if (isProductInCart) {
          draft.splice(productIndex, 1)
        }
      })
    }
    case ActionTypes.CLEAR_CART: {
      return []
    }
    default:
      return state
  }
}

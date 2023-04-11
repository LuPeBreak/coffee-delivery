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
    default:
      return state
  }
}

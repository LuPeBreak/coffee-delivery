import { ReactNode, createContext, useReducer, useState } from 'react'
import {
  ProductState,
  productsInCartReducer,
} from '../reducers/productsInCart/reducer'
import { Product } from '../pages/Home/components/ProductsList/productsList'
import { addNewCycleAction } from '../reducers/productsInCart/actions'

interface Address {
  cep: string
  rua: string
  numero: string
  complemento?: string
  bairro: string
  cidade: string
  uf: string
}

interface newProductProps {
  product: Product
  quantity: number
}

export type PaymentMethod =
  | 'cartão de credito'
  | 'cartão de débito'
  | 'dinheiro'

interface OrderContextType {
  productsInCartState: ProductState[]
  paymentMethod: PaymentMethod | null
  address: Address
  taxaDeEntrega: number
  totalOrderValue: number
  numberOfProductsInCart: number
  addNewProduct: ({ product, quantity }: newProductProps) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface CyclesContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: CyclesContextProviderProps) {
  const [productsInCartState, dispatch] = useReducer(productsInCartReducer, [])

  const [address, setAddress] = useState({
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    uf: '',
  })
  const [paymentMethod, setPaymentMethod] = useState(null)

  const taxaDeEntrega = 3.5
  const totalOrderValue = productsInCartState.reduce((total, product) => {
    return (total += product.price * product.quantity)
  }, 0)
  const numberOfProductsInCart = productsInCartState.length

  function addNewProduct({ product, quantity }: newProductProps) {
    const newProductInCart = {
      id: product.id,
      title: product.title,
      quantity,
      price: product.price,
      imageURL: product.imageURL,
    }
    dispatch(addNewCycleAction(newProductInCart))
  }

  return (
    <OrderContext.Provider
      value={{
        productsInCartState,
        address,
        paymentMethod,
        taxaDeEntrega,
        totalOrderValue,
        numberOfProductsInCart,
        addNewProduct,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

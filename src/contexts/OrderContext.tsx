import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import {
  ProductState,
  productsInCartReducer,
} from '../reducers/productsInCart/reducer'
import { Product } from '../pages/Home/components/ProductsList/productsList'
import {
  addNewProductAction,
  changeProductQuantityAction,
  removeProductFromCartAction,
} from '../reducers/productsInCart/actions'

interface newProductProps {
  product: Product
  quantity: number
}

export type PaymentMethod =
  | 'cartão de credito'
  | 'cartão de débito'
  | 'dinheiro'

interface Address {
  cep: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  uf: string
}

interface FormDataProps extends Address {
  paymentMethod: PaymentMethod | null
}

interface OrderContextType {
  productsInCartState: ProductState[]
  paymentMethod: PaymentMethod | null
  address: Address
  deliveryTax: number
  totalOrderValue: number
  numberOfProductsInCart: number
  addNewProduct: ({ product, quantity }: newProductProps) => void
  changeProductQuantity: (id: number, quantity: number) => void
  removeProduct: (id: number) => void
  saveAdress: (formData: FormDataProps) => void
  savePaymentMethod: (formData: FormDataProps) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const aplicationName = '@coffe-delivery'
  const aplicationVersion = '1.0.0'
  const [productsInCartState, dispatch] = useReducer(
    productsInCartReducer,
    [],
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        `${aplicationName}:products-in-cart-state-${aplicationVersion}`,
      )
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
      return initialState
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(productsInCartState)
    localStorage.setItem(
      `${aplicationName}:products-in-cart-state-${aplicationVersion}`,
      stateJSON,
    )
  }, [productsInCartState])

  const [address, setAddress] = useState<Address>({
    cep: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    uf: '',
  })
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null)

  const totalOrderValue = productsInCartState.reduce((total, product) => {
    return (total += product.price * product.quantity)
  }, 0)
  const numberOfProductsInCart = productsInCartState.length

  const deliveryTax = numberOfProductsInCart >= 1 ? 3.5 : 0

  function addNewProduct({ product, quantity }: newProductProps) {
    const newProductInCart = {
      id: product.id,
      title: product.title,
      quantity,
      price: product.price,
      imageURL: product.imageURL,
    }
    dispatch(addNewProductAction(newProductInCart))
  }

  function changeProductQuantity(id: number, quantity: number) {
    dispatch(changeProductQuantityAction(id, quantity))
  }

  function removeProduct(id: number) {
    dispatch(removeProductFromCartAction(id))
  }

  function saveAdress(formData: FormDataProps) {
    setAddress({
      cep: formData.cep,
      street: formData.street,
      number: formData.number,
      neighborhood: formData.neighborhood,
      city: formData.city,
      uf: formData.uf,
      complement: formData.complement,
    })
  }

  function savePaymentMethod(formData: FormDataProps) {
    setPaymentMethod(formData.paymentMethod)
  }

  console.log(address, paymentMethod)

  return (
    <OrderContext.Provider
      value={{
        productsInCartState,
        address,
        paymentMethod,
        deliveryTax,
        totalOrderValue,
        numberOfProductsInCart,
        addNewProduct,
        changeProductQuantity,
        removeProduct,
        saveAdress,
        savePaymentMethod,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

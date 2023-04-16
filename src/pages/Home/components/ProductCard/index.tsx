import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  ProductCardContainer,
  PurchaseDetailsContainer,
  ProductDetailsContainer,
  ProductCategoriesContainer,
} from './styles'
import { useContext, useState } from 'react'
import { Product } from '../ProductsList/productsList'
import { OrderContext } from '../../../../contexts/OrderContext'
import { baseFormatter } from '../../../../utils/formatters'
import { BaseButton, CounterContainer } from '../../../../styles/baseComponents'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1)

  const { addNewProduct } = useContext(OrderContext)

  function handleAddQuantity() {
    setQuantity((state) => {
      return state + 1
    })
  }
  function HandleSubtractQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function handleAddProductToCart() {
    addNewProduct({ product, quantity })
  }

  return (
    <ProductCardContainer>
      <img
        src={product.imageURL}
        alt={`imagem de de uma bebida cafeinada do tipo ${product.title}`}
      />
      <ProductCategoriesContainer>
        {product.categories.map((category) => {
          return <span key={category}>{category}</span>
        })}
      </ProductCategoriesContainer>
      <h1>{product.title}</h1>
      <span>{product.description}</span>
      <ProductDetailsContainer>
        <div>
          R$ <span>{baseFormatter.format(product.price)}</span>
        </div>
        <PurchaseDetailsContainer>
          <CounterContainer>
            <BaseButton onClick={HandleSubtractQuantity}>
              <Minus weight="bold" size={14} />
            </BaseButton>

            {quantity}

            <BaseButton onClick={handleAddQuantity}>
              <Plus weight="bold" size={14} />
            </BaseButton>
          </CounterContainer>
          <BaseButton onClick={handleAddProductToCart}>
            <ShoppingCart weight="fill" size={22} />
          </BaseButton>
        </PurchaseDetailsContainer>
      </ProductDetailsContainer>
    </ProductCardContainer>
  )
}

import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  ProductCardContainer,
  PurchaseDetailsContainer,
  ProductDetailsContainer,
  ButtonWithIcon,
  ProductCategoriesContainer,
} from './styles'
import { useContext, useState } from 'react'
import { Product } from '../ProductsList/productsList'
import { OrderContext } from '../../../../contexts/OrderContext'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1)

  const { addNewProduct } = useContext(OrderContext)

  const formatter = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  })

  function addQuantity() {
    setQuantity((state) => {
      return state + 1
    })
  }
  function subtractQuantity() {
    setQuantity((state) => {
      if (quantity > 1) return state - 1
      return state
    })
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
          R$ <span>{formatter.format(product.price)}</span>
        </div>
        <PurchaseDetailsContainer>
          <div>
            <ButtonWithIcon onClick={subtractQuantity}>
              <Minus weight="bold" size={14} />
            </ButtonWithIcon>

            {quantity}

            <ButtonWithIcon onClick={addQuantity}>
              <Plus weight="bold" size={14} />
            </ButtonWithIcon>
          </div>
          <ButtonWithIcon onClick={handleAddProductToCart}>
            <ShoppingCart weight="fill" size={22} />
          </ButtonWithIcon>
        </PurchaseDetailsContainer>
      </ProductDetailsContainer>
    </ProductCardContainer>
  )
}

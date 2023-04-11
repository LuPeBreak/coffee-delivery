import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { Product } from '../productsList'
import {
  ProductCardContainer,
  PurchaseDetailsContainer,
  ProductDetailsContainer,
  ButtonWithIcon,
  ProductCategoriesContainer,
} from './styles'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(0)

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
      if (quantity > 0) return state - 1
      return state
    })
  }

  return (
    <ProductCardContainer>
      <img
        src={product.image}
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
          <ButtonWithIcon>
            <ShoppingCart weight="fill" size={22} />
          </ButtonWithIcon>
        </PurchaseDetailsContainer>
      </ProductDetailsContainer>
    </ProductCardContainer>
  )
}

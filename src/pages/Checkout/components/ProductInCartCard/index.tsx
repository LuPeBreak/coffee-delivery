import { Minus, Plus, Trash } from 'phosphor-react'
import {
  BaseButton,
  CounterContainer,
} from '../../../../styles/baseComponents'
import { ProductInCartCardContainer } from './styles'
import { ProductState } from '../../../../reducers/productsInCart/reducer'
import { currencyFormatter } from '../../../../utils/formatters'

interface ProductInCartCardProps {
  product: ProductState
}

export function ProductInCartCard({ product }: ProductInCartCardProps) {
  function addQuantity() {}
  function subtractQuantity() {}
  function handleRemoveProduct() {}

  const totalValue = product.price * product.quantity

  return (
    <ProductInCartCardContainer>
      <img src={product.imageURL} alt={`Imagem de ${product.title}`} />
      <div>
        <div>
          <span>{product.title}</span>
          <span>{currencyFormatter.format(totalValue)}</span>
        </div>
        <div>
          <CounterContainer>
            <BaseButton onClick={subtractQuantity}>
              <Minus weight="bold" size={14} />
            </BaseButton>

            {product.quantity}

            <BaseButton onClick={addQuantity}>
              <Plus weight="bold" size={14} />
            </BaseButton>
          </CounterContainer>
          <BaseButton onClick={handleRemoveProduct}>
            <Trash /> Remover
          </BaseButton>
        </div>
      </div>
    </ProductInCartCardContainer>
  )
}

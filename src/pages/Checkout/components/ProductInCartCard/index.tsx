import { Minus, Plus, Trash } from 'phosphor-react'
import { BaseButton, CounterContainer } from '../../../../styles/baseComponents'
import { ProductInCartCardContainer } from './styles'
import { ProductState } from '../../../../reducers/productsInCart/reducer'
import { currencyFormatter } from '../../../../utils/formatters'
import React, { useContext } from 'react'
import { OrderContext } from '../../../../contexts/OrderContext'

interface ProductInCartCardProps {
  product: ProductState
}

export function ProductInCartCard({ product }: ProductInCartCardProps) {
  const { changeProductQuantity, removeProduct } = useContext(OrderContext)

  function handleAddProductQuantity() {
    changeProductQuantity(product.id, 1)
  }
  function handleSubtractProductQuantity() {
    changeProductQuantity(product.id, -1)
  }
  function handleRemoveProduct() {
    removeProduct(product.id)
  }

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
            <BaseButton type="button" onClick={handleSubtractProductQuantity}>
              <Minus weight="bold" size={14} />
            </BaseButton>

            {product.quantity}

            <BaseButton type="button" onClick={handleAddProductQuantity}>
              <Plus weight="bold" size={14} />
            </BaseButton>
          </CounterContainer>
          <BaseButton type="button" onClick={handleRemoveProduct}>
            <Trash /> Remover
          </BaseButton>
        </div>
      </div>
    </ProductInCartCardContainer>
  )
}

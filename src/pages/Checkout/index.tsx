import { useContext } from 'react'
import {
  ButtonLabel,
  CheckoutContainer,
  FormContainer,
  ProductSumamaryContainer,
  ProductSumamaryInfoContainer,
  Separator,
} from './styles'
import { OrderContext } from '../../contexts/OrderContext'
import { currencyFormatter } from '../../utils/formatters'
import { ProductInCartCard } from './components/ProductInCartCard'

export function Checkout() {
  const { productsInCartState, totalOrderValue, deliveryTax } =
    useContext(OrderContext)
  return (
    <CheckoutContainer>
      <form action="">
        <FormContainer>
          <h3>Complete seu pedido</h3>
          <div>address</div>
          <div>payment method</div>
        </FormContainer>
        <ProductSumamaryContainer>
          <h3>Cafés selecionados</h3>
          <div>
            <div>
              {productsInCartState.map((product) => {
                return (
                  <div key={product.id}>
                    <ProductInCartCard product={product} />
                    <Separator key={product.id} />
                  </div>
                )
              })}
            </div>
            <ProductSumamaryInfoContainer>
              <div>
                <span>Total de itens</span>
                <span>{currencyFormatter.format(totalOrderValue)}</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>{currencyFormatter.format(deliveryTax)}</span>
              </div>
              <div>
                <span>Total</span>
                <span>
                  {currencyFormatter.format(totalOrderValue + deliveryTax)}
                </span>
              </div>
            </ProductSumamaryInfoContainer>
            <ButtonLabel type="submit">confirmar pedido</ButtonLabel>
          </div>
        </ProductSumamaryContainer>
      </form>
    </CheckoutContainer>
  )
}

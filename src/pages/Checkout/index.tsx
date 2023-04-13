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
import { AdressForm } from './components/AdressForm'
import { TitleWithIcon } from './components/TitleWithIcon'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'

export function Checkout() {
  const { productsInCartState, totalOrderValue, deliveryTax } =
    useContext(OrderContext)
  return (
    <CheckoutContainer>
      <form action="">
        <FormContainer>
          <h3>Complete seu pedido</h3>
          <div>
            <TitleWithIcon
              title="Endereço de Entrega"
              subTitle="Informe o endereço onde deseja receber seu pedido"
              icon={
                <MapPinLine size={22} color={defaultTheme['yellow-dark']} />
              }
            />
            <AdressForm />
          </div>
          <div>
            <TitleWithIcon
              title="Pagamento"
              subTitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
              icon={<CurrencyDollar size={22} color={defaultTheme.purple} />}
            />
            payment method
          </div>
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

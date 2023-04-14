import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
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

const orderFormValidationSchema = zod.object({
  cep: zod
    .string()
    .max(8, 'Informe o cep correto')
    .min(8, 'Informe o cep correto'),
  street: zod.string().min(1, 'informe a rua'),
  number: zod.string().min(1, 'informe o numero'),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, 'informe o bairro'),
  city: zod.string().min(1, 'informe a cidade'),
  uf: zod.string().min(1, 'informe o estado (UF)'),
  paymentMethod: zod.enum([
    'cartão de credito',
    'cartão de débito',
    'dinheiro',
  ]),
})

type OrderFormData = zod.infer<typeof orderFormValidationSchema>

export function Checkout() {
  const {
    productsInCartState,
    totalOrderValue,
    deliveryTax,
    saveAdress,
    savePaymentMethod,
  } = useContext(OrderContext)

  const orderForm = useForm<OrderFormData>({
    resolver: zodResolver(orderFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      uf: '',
      paymentMethod: undefined,
    },
  })
  const { handleSubmit, reset } = orderForm

  function handleCompleteOrder(data: OrderFormData) {
    saveAdress(data)
    savePaymentMethod(data)
    reset()
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleCompleteOrder)}>
        <FormProvider {...orderForm}>
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
        </FormProvider>
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

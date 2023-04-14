import { useFormContext } from 'react-hook-form'
import { CardOptionContainer, PaymentMethodFormContainer } from './styles'

import { Bank, CreditCard, Money } from 'phosphor-react'

export function PaymentMethodForm() {
  const { register } = useFormContext()

  return (
    <PaymentMethodFormContainer>
      <CardOptionContainer>
        <input
          type="radio"
          value="cartão de credito"
          {...register('paymentMethod')}
        />
        <div className="panel panel-default card-input">
          <CreditCard size={16} />
          <span>cartão de credito</span>
        </div>
      </CardOptionContainer>

      <CardOptionContainer>
        <input
          type="radio"
          value="cartão de débito"
          {...register('paymentMethod')}
        />
        <div className="panel panel-default card-input">
          <Bank size={16} />
          <span>cartão de débito</span>
        </div>
      </CardOptionContainer>

      <CardOptionContainer>
        <input type="radio" value="dinheiro" {...register('paymentMethod')} />
        <div>
          <Money size={16} />
          <span>dinheiro</span>
        </div>
      </CardOptionContainer>
    </PaymentMethodFormContainer>
  )
}

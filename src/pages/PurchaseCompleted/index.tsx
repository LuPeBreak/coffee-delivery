import { PurchaseCompletedContainer } from './styles'
import purchaseCompleted from '../../assets/purchase-completed-image.svg'
import { useContext, useEffect } from 'react'
import { OrderContext } from '../../contexts/OrderContext'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { RoundIconContainer } from '../../styles/baseComponents'
import { defaultTheme } from '../../styles/themes/default'
import { useNavigate } from 'react-router-dom'

export function PurchaseCompleted() {
  const { address, paymentMethod } = useContext(OrderContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (paymentMethod === null || address.street === null) {
      navigate('/')
    }
  }, [paymentMethod, address, navigate])

  return (
    <PurchaseCompletedContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <h3>Agora é só aguardar que logo o café chegará até você</h3>
        <div>
          {address.street ? (
            <div>
              <RoundIconContainer>
                <MapPin weight="fill" size={16} />
              </RoundIconContainer>
              <span>
                Entrega em <strong>{address.street} </strong>,{address.number}{' '}
                {address.neighborhood} - {address.city}, {address.uf}
              </span>
            </div>
          ) : null}
          <div>
            <RoundIconContainer backgroundColor={defaultTheme.yellow}>
              <Timer weight="fill" size={16} />
            </RoundIconContainer>
            <span>
              <p>Previsão de entrega</p>
              <p>20 min - 30 min</p>
            </span>
          </div>
          {paymentMethod ? (
            <div>
              <RoundIconContainer backgroundColor={defaultTheme['yellow-dark']}>
                <CurrencyDollar weight="fill" size={16} />
              </RoundIconContainer>
              <span>
                <p>Pagamento na entrega</p>
                <strong>{paymentMethod}</strong>
              </span>
            </div>
          ) : null}
        </div>
      </div>
      <img
        src={purchaseCompleted}
        alt="Imagem de um entregador a caminho de fazer uma entrega com a logo do coffe delivery"
      />
    </PurchaseCompletedContainer>
  )
}

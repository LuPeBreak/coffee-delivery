import { HeaderContainer } from './styles'
import { ShoppingCart, MapPin } from 'phosphor-react'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

export function Header() {
  const { numberOfProductsInCart } = useContext(OrderContext)
  return (
    <HeaderContainer>
      <img src={logo} alt="logo do coffe delivery" />
      <nav>
        <div>
          <MapPin weight="fill" size={22} />
          <span>Barra Mansa, RJ</span>
        </div>
        <NavLink to={'/checkout'}>
          <ShoppingCart weight="fill" size={22} />
          {numberOfProductsInCart > 0 ? (
            <span>{numberOfProductsInCart}</span>
          ) : null}
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

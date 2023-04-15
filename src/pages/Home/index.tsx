import {
  HomeContainer,
  HomeInfoContainer,
  HomePresentationContainer,
} from './styles'
import homeImage from '../../assets/home-image.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { ProductsList } from './components/ProductsList'
import { RoundIconContainer } from '../../styles/baseComponents'
import { defaultTheme } from '../../styles/themes/default'
export function Home() {
  return (
    <HomeContainer>
      <HomePresentationContainer>
        <HomeInfoContainer>
          <header>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h2>
          </header>
          <div>
            <span>
              <RoundIconContainer backgroundColor={defaultTheme['yellow-dark']}>
                <ShoppingCart weight="fill" size={16} />
              </RoundIconContainer>
              Compra simples e segura
            </span>
            <span>
              <RoundIconContainer backgroundColor={defaultTheme['base-text']}>
                <Package weight="fill" size={16} />
              </RoundIconContainer>
              Embalagem mantém o café intacto
            </span>
            <span>
              <RoundIconContainer backgroundColor={defaultTheme.yellow}>
                <Timer weight="fill" size={16} />
              </RoundIconContainer>
              Entrega rápida e rastreada
            </span>
            <span>
              <RoundIconContainer backgroundColor={defaultTheme.purple}>
                <Coffee weight="fill" size={16} />
              </RoundIconContainer>
              O café chega fresquinho até você
            </span>
          </div>
        </HomeInfoContainer>
        <div>
          <img src={homeImage} alt="Imagem de um cafe e graos" />
        </div>
      </HomePresentationContainer>
      <ProductsList />
    </HomeContainer>
  )
}

import { Header } from "../../components/Header";
import {
  HomeContainer,
  HomeInfoContainer,
  HomePresentationContainer,
  HomeProductsContainer,
} from "./styles";
import homeImage from "../../assets/home-image.svg";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
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
              <ShoppingCart weight="fill" size={32} /> Compra simples e segura
            </span>
            <span>
              <Package weight="fill" size={32} /> Embalagem mantém o café
              intacto
            </span>
            <span>
              <Timer weight="fill" size={32} /> Entrega rápida e rastreada
            </span>
            <span>
              <Coffee weight="fill" size={32} /> O café chega fresquinho até
              você
            </span>
          </div>
        </HomeInfoContainer>
        <div>
          <img src={homeImage} alt="Imagem de um cafe e graos" />
        </div>
      </HomePresentationContainer>
      <HomeProductsContainer>products</HomeProductsContainer>
    </HomeContainer>
  );
}

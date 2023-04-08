import { HeaderContainer } from "./styles";
import { ShoppingCart, MapPin } from "phosphor-react";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

export function Header() {
  const cartItemsNumber = 3; // to do temporario para teste
  return (
    <HeaderContainer>
      <img src={logo} alt="logo do coffe delivery" />
      <nav>
        <div>
          <MapPin weight="fill" size={22} />
          <span>Barra Mansa, RJ</span>
        </div>
        <NavLink to={"/checkout"}>
          <ShoppingCart weight="fill" size={22} />
          {cartItemsNumber>0?<span>{cartItemsNumber}</span>:null}
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}

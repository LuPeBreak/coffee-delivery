import { ProductCard } from '../ProductCard'
import { productsList } from './productsList'
import { ProductsListContainer } from './styles'

export function ProductsList() {
  return (
    <ProductsListContainer>
      <h2>Nossos cafés</h2>

      <div>
        {productsList.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}
      </div>
    </ProductsListContainer>
  )
}

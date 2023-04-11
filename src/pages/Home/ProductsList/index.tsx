import { ProductCard } from './ProductCard'
import { ProductsListContainer } from './styles'
import { productsList } from './productsList'

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

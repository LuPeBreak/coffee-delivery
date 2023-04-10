import { ProductCard } from './ProductCard'
import { ProductsListContainer } from './styles'
import { productsList } from './productsList'

export function ProductsList() {
  return (
    <ProductsListContainer>
      {productsList.map((product) => {
        return <ProductCard key={product.id} product={product} />
      })}
    </ProductsListContainer>
  )
}

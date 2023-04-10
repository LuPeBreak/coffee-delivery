import { Product } from '../productsList'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div>
      <img
        src={product.image}
        alt={`imagem de de uma bebida cafeinada do tipo ${product.title}`}
      />
      <h1>{product.title}</h1>
    </div>
  )
}

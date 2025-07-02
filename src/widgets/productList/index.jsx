import { SimpleGrid } from '@chakra-ui/react'
import { ProductCard } from './ProductCard'

const products = [
  { id: 1, name: 'Товар 1', price: 100, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Товар 2', price: 200, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Товар 3', price: 300, image: 'https://via.placeholder.com/150' }
]

export const ProductList = () => {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={4}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  )
}

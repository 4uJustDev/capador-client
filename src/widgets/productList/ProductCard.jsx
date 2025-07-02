import { Box, Image, Heading, Text, Button } from '@chakra-ui/react'

export const ProductCard = ({ product }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4}>
      <Image src={product.image} alt={product.name} mb={3} />
      <Heading as="h3" size="md" mb={2}>
        {product.name}
      </Heading>
      <Text mb={3}>${product.price}</Text>
      <Button colorScheme="blue">В корзину</Button>
    </Box>
  )
}

import { Container, Box, Button, Image, Text } from '@chakra-ui/react'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { useDispatch, useSelector } from 'react-redux'
import { setUser, clearUser } from '@/features/userSlice'

export const UserPage = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)

  if (!user) {
    return (
      <Container center>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const decoded = jwtDecode(credentialResponse.credential)
            dispatch(setUser(decoded))
          }}
          onError={() => {
            console.log('Google Login Failed')
          }}
        />
      </Container>
    )
  }

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} maxW="sm" mx="auto" mt={8} textAlign="center">
      <Image
        src={user.picture}
        alt={user.name}
        borderRadius="full"
        boxSize="100px"
        mx="auto"
        mb={4}
      />
      <Text fontWeight="bold" fontSize="xl">
        {user.name}
      </Text>
      <Text color="gray.500">{user.email}</Text>
      <Button mt={4} colorScheme="red" onClick={() => dispatch(clearUser())}>
        Выйти
      </Button>
    </Box>
  )
}

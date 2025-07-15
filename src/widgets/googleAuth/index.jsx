import { Box, Button, Image } from '@chakra-ui/react'
import { toaster } from '@/components/ui/toaster'
import { GoogleLogin } from '@react-oauth/google'
import { useUserStore } from '@/store'
import { jwtDecode } from 'jwt-decode'

export const GoogleAuth = () => {
  const setUser = useUserStore((state) => state.setUser)

  return (
    <Box textAlign="center" p={4}>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const decoded = jwtDecode(credentialResponse.credential)
          setUser(decoded)

          toaster.create({
            title: 'Авторизация успешна',
            description: `Добро пожаловать, ${decoded.name}!`,
            status: 'success',
            duration: 3000,
            isClosable: true
          })
        }}
        onError={() => {
          toaster.create({
            title: 'Ошибка авторизации',
            description: 'Попробуйте еще раз',
            status: 'error',
            duration: 3000,
            isClosable: true
          })
        }}
        render={({ onClick }) => (
          <Button
            onClick={onClick}
            colorScheme="red"
            leftIcon={<Image src="https://www.google.com/favicon.ico" boxSize="20px" />}
            size="lg"
            borderRadius="full"
            boxShadow="md"
            _hover={{ transform: 'scale(1.05)' }}
          >
            Войти через Google
          </Button>
        )}
      />
    </Box>
  )
}

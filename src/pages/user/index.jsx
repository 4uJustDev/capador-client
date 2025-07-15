import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Text
} from '@chakra-ui/react'
import { useUserStore } from '@/store'
import { toaster } from '@/components/ui/toaster'
import { GoogleAuth } from '@/widgets'

export const UserPage = () => {
  const { user, isAuthenticated, clearUser } = useUserStore()

  if (!isAuthenticated) return <GoogleAuth />

  const handleLogout = () => {
    clearUser()
    toaster.create({
      description: 'Вы вышли из системы',
      type: 'info',
      duration: 2000,
      isClosable: true
    })
  }

  return (
    <Card maxW="md" mx="auto" mt={8} boxShadow="xl">
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name={user.name} src={user.picture} size="xl" />
            <Box>
              <Heading size="lg">{user.name}</Heading>
              <Text color="gray.500">{user.email}</Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody py={0}>
        <Text>ID: {user.id}</Text>
      </CardBody>
      <CardFooter>
        <Button colorScheme="red" variant="outline" width="full" onClick={handleLogout}>
          Выйти
        </Button>
      </CardFooter>
    </Card>
  )
}

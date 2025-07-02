import { Flex, IconButton, Button, Container, Text, Avatar } from '@chakra-ui/react'
import { useColorMode } from '@/components/ui/color-mode'
import { Link } from 'react-router-dom'
import { LuMoon, LuSun, LuShoppingCart, LuUser, LuInfo } from 'react-icons/lu'
import { selectUserPhoto } from '@/features/userSlice'

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const photo = selectUserPhoto()

  return (
    <Flex as="header" p={4} align="center" justify="space-between" borderBottom="1px solid">
      <Container flex="1" />

      <Flex flex="1" justify="center">
        <Link to="/">
          <Text>CAPADOR</Text>
        </Link>
      </Flex>

      <Flex flex="1" gap="1" justify="flex-end">
        <Link to="/shop">
          <Button>
            <LuShoppingCart /> Shop
          </Button>
        </Link>
        <Link to="/about">
          <Button>
            <LuInfo /> About
          </Button>
        </Link>

        <Link to="/user">
          <IconButton variant="outline">
            {/* {photo ? <Avatar size="sm" src={photo} name={user.name} /> : <LuUser />} */}
            {photo ? <Avatar size="sm" src={photo} /> : <LuUser />}
          </IconButton>
        </Link>

        <IconButton ml="5" variant="outline" onClick={toggleColorMode}>
          {colorMode === 'light' ? <LuSun /> : <LuMoon />}
        </IconButton>
      </Flex>
    </Flex>
  )
}

import { useState } from 'react'
import { Box, Container } from '@chakra-ui/react'
import { GoogleLogin, useGoogleOneTapLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'

export const HomePage = () => {
  const [userProfile, setUserProfile] = useState(null)

  useGoogleOneTapLogin({
    onSuccess: (credentialResponse) => {
      const decoded = jwtDecode(credentialResponse.credential)
      setUserProfile(decoded)
    },
    use_fedcm_for_prompt: true
  })

  return (
    <Container flex="1">
      <Box>START PAGE</Box>
      {userProfile ? (
        <Box>
          <p>Welcome, {userProfile.name}</p>
          <img src={userProfile.picture} alt="Profile" />
        </Box>
      ) : (
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log('Google Login Success:', credentialResponse)
            const decoded = jwtDecode(credentialResponse.credential)
            console.log('Decoded JWT:', decoded)
            setUserProfile(decoded)
          }}
          onError={() => {
            console.log('Google Login Failed')
          }}
        />
      )}
    </Container>
  )
}

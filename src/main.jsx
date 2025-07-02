import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/index.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID
console.log('Google Client ID:', clientId)
console.log('FedCM supported:', 'IdentityCredential' in window)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/index.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Provider as ReduxProvider } from 'react-redux'
import store from './store.js'

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <GoogleOAuthProvider clientId={clientId}>
        <App />
      </GoogleOAuthProvider>
    </ReduxProvider>
  </StrictMode>
)

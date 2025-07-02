import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider as ChakraProvider } from '@/components/ui/provider'
import { HomePage } from '@/pages/Home'
import { ShopPage } from '@/pages/Shop'
import { UserPage } from '@/pages/User'
import { AboutPage } from '@/pages/About'
import { Header } from '@/widgets/Header'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App

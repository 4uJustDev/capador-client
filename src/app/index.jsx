import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider as ChakraProvider } from '@/components/ui/provider'
import { HomePage, ShopPage, UserPage, AboutPage } from '@/pages'
import { Header } from '@/widgets'
// import { Header } from '@/widgets/Header'

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

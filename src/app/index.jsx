import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from '@/components/ui/provider'
import { HomePage } from '@/pages/Home'
import { ShopPage } from '@/pages/Shop'
import { Header } from '@/widgets/Header'

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App

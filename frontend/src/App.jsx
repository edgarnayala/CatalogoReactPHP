import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import CartPage from './pages/CartPage'
import ProductDetail from './pages/ProductDetail'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/cart"
          element={<CartPage />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetail />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App
import { useState } from 'react'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import products from './data/products'
import SearchBar from './components/SearchBar'
import CategoryFilter from './components/CategoryFilter'
import './App.css'

function App() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
  setCart([...cart, product])
}

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesCategory =
      selectedCategory === 'All' ||
      product.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <>
      <Header
        titulo="Catálogo Web y Móvil"
        descripcion="Proyecto desarrollado con React, PHP y MySQL."
      />

      <h2>Carrito: {cart.length} productos</h2>


      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <p>
        Products found: {filteredProducts.length}
      </p>

      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </>
  )
}

export default App
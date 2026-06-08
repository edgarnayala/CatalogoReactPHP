import { useState } from 'react'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import products from './data/products'
import SearchBar from './components/SearchBar'
import './App.css'

function App() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

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

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div>
        <button onClick={() => setSelectedCategory('All')}>
          All
        </button>

        <button onClick={() => setSelectedCategory('Protein')}>
          Protein
        </button>

        <button onClick={() => setSelectedCategory('Chocolate')}>
          Chocolate
        </button>

        <button onClick={() => setSelectedCategory('Strawberry')}>
          Strawberry
        </button>
      </div>

      <p>
        Products found: {filteredProducts.length}
      </p>

      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          image={product.image}
        />
      ))}
    </>
  )
}

export default App
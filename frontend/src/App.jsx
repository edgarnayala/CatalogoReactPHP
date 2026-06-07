import { useState } from 'react'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import products from './data/products'
import './App.css'

function App() {
  const [busqueda, setBusqueda] = useState('')

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <>
      <Header
        titulo="Catálogo Web y Móvil"
        descripcion="Proyecto desarrollado con React, PHP y MySQL."
      />

      <input
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          nombre={product.name}
          precio={product.price}
          descripcion={product.description}
        />
      ))}
    </>
  )
}

export default App
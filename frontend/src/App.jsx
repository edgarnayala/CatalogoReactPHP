import Header from './components/Header'
import ProductCard from './components/ProductCard'
import './App.css'

function App() {
  const productos = [
    {
      id: 1,
      nombre: 'Hotcakes Proteicos',
      precio: 120,
      descripcion: 'Proteína sabor vainilla'
    },
    {
      id: 2,
      nombre: 'Hotcakes Chocolate',
      precio: 130,
      descripcion: 'Con cacao y proteína'
    },
    {
      id: 3,
      nombre: 'Hotcakes Fresa',
      precio: 125,
      descripcion: 'Con sabor a fresa'
    }
  ]
  return (
    <>
      <Header
        titulo="Catálogo Web y Móvil"
        descripcion="Proyecto desarrollado con React, PHP y MySQL."
      />

      {productos.map((producto) => (
        <ProductCard
          key={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
          descripcion={producto.descripcion}
        />
      ))}
    </>
  )
}

export default App
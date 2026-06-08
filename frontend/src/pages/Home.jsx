import { useState, useEffect } from 'react'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import Cart from '../components/Cart'
import '../App.css';

function Home() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  })
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(
      'http://localhost/CatalogoReactPHP/backend/api/products.php'
    )
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    const existingProduct = cart.find(
      (item) => item.id === product.id
    )

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )

      setCart(updatedCart)
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ])
    }
  }

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )

    setCart(updatedCart)
  }

  const decreaseQuantity = (productId) => {
    const updatedCart = cart
      .map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)

    setCart(updatedCart)
  }

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(
      (item) => item.id !== productId
    )

    setCart(updatedCart)
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

      <Cart
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeFromCart={removeFromCart}
      />

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

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </>
  )
}

export default Home
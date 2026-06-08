function Cart({ cart }) {
  return (
    <div>
      <h2>Carrito ({cart.length})</h2>

      {cart.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        cart.map((product, index) => (
          <div key={index}>
            <p>
              {product.name} - ${product.price}
            </p>
          </div>
        ))
      )}
    </div>
  )
}

export default Cart
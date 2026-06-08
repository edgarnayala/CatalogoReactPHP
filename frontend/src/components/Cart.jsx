function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
}) {
  const total = cart.reduce(
    (accumulator, product) =>
      accumulator + product.price * product.quantity,
    0
  )

  return (
    <div className="cart">
      <h2>Carrito ({cart.length})</h2>

      {cart.map((product) => (
        <div key={product.id} className="cart-item">
          <p>{product.name}</p>

          <div className="cart-controls">
            <button onClick={() => decreaseQuantity(product.id)}>
              -
            </button>
            <span> {product.quantity} </span>
            <button onClick={() => increaseQuantity(product.id)}>
              +
            </button>
            <button onClick={() => removeFromCart(product.id)}>
              🗑
            </button>
          </div>

          <p>${product.price * product.quantity}</p>
        </div>
      ))}

      <h3 className="cart-total">Total: ${total}</h3>
    </div>
  )
}

export default Cart
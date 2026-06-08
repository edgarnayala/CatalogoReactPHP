function Cart({ cart }) {
    const total = cart.reduce(
        (accumulator, product) =>
            accumulator + product.price * product.quantity,
        0
    )

    return (
        <div>
            <h2>Carrito ({cart.length})</h2>

            {cart.map((product, index) => (
                <p key={product.id}>
                    {product.name} x{product.quantity} - $
                    {product.price * product.quantity}
                </p>
            ))}

            <h3>Total: ${total}</h3>
        </div>
    )
}

export default Cart
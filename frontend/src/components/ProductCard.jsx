function ProductCard({ name, price, description }) {
  return (
    <div className="card">
      <h2>{name}</h2>

      <h3>${price}</h3>

      <p>{description}</p>
    </div>
  )
}

export default ProductCard
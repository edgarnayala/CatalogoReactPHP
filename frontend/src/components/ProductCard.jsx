function ProductCard({ nombre, precio, descripcion }) {
  return (
    <div className="card">
      <h2>{nombre}</h2>

      <h3>${precio}</h3>

      <p>{descripcion}</p>
    </div>
  )
}

export default ProductCard
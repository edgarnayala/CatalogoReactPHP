function ProductCard({
    name,
    price,
    description,
    image
}) {
    return (
        <div className="card">
            <img
                src={image}
                alt={name}
                width="250"
            />

            <h2>{name}</h2>

            <h3>${price}</h3>

            <p>{description}</p>
        </div>
    )
}

export default ProductCard
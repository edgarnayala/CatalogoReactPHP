function CategoryFilter({
  selectedCategory,
  setSelectedCategory
}) {
  return (
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
  )
}

export default CategoryFilter
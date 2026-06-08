import proteinImg from '../assets/products/protein.jpg'
import chocolateImg from '../assets/products/chocolate.jpg'
import strawberryImg from '../assets/products/strawberry.jpg'

const products = [
  {
    id: 1,
    name: 'Hotcakes Proteicos',
    price: 120,
    description: 'Proteína sabor vainilla',
    category: 'Protein',
    image: proteinImg
  },
  {
    id: 2,
    name: 'Hotcakes Chocolate',
    price: 130,
    description: 'Con cacao y proteína',
    category: 'Chocolate',
    image: chocolateImg
  },
  {
    id: 3,
    name: 'Hotcakes Fresa',
    price: 125,
    description: 'Con sabor a fresa',
    category: 'Strawberry',
    image: strawberryImg
  }
]

export default products
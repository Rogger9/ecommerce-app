import { IProducts } from '../types'

const listProducts: IProducts[] = [
  {
    id: 1,
    name: 'Product name',
    category: 'Electronics',
    description: 'This is the product description',
    imageURL: '',
    price: 60,
    stock: 10,
    brand: 'LG'
  },
  {
    id: 2,
    name: 'Product name',
    category: 'Electronics',
    description: 'This is the product description',
    imageURL: '',
    price: 100,
    stock: 2,
    brand: 'Sony'
  },
  {
    id: 3,
    name: 'Product name',
    category: 'Smart TV',
    description: 'This is the product description',
    imageURL: '',
    price: 120,
    stock: 4,
    brand: 'Samsung'
  },
  {
    id: 4,
    name: 'Product name',
    category: 'Sports',
    description: 'This is the product description',
    imageURL: '',
    price: 100,
    stock: 6,
    brand: 'Adidas'
  }
]

export default listProducts

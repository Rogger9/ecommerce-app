import { IProducts } from '../../types'
import ProductCard from './ProductCard'
import { StyledShowProducts } from './style'

const listProducts: IProducts[] = [
  {
    name: 'Product name',
    description: 'This is the product description',
    imageURL: '',
    price: 100,
    stock: 4
  },
  {
    name: 'Product name',
    description: 'This is the product description',
    imageURL: '',
    price: 100,
    stock: 4
  },
  {
    name: 'Product name',
    description: 'This is the product description',
    imageURL: '',
    price: 100,
    stock: 4
  },
  {
    name: 'Product name',
    description: 'This is the product description',
    imageURL: '',
    price: 100,
    stock: 4
  }
]

const ShowProducts = () => (
  <StyledShowProducts>
    {
      listProducts.map(({ name, description, imageURL, price, stock }) => (
        <ProductCard key={name} name={name} description={description} imageURL={imageURL} price={price} stock={stock} />
      ))
    }
  </StyledShowProducts>
)

export default ShowProducts

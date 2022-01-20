import { IProducts } from '../../types'
import ProductCard from './ProductCard'
import { StyledShowProducts } from './style'

interface IProps {
  products: IProducts[] | []
}

const ShowProducts = ({ products = [] }: IProps) => (
  <StyledShowProducts>
    {
      products.length > 0
        ? products.map(({ id, name, description, imageURL, price, stock }) => (
          <ProductCard key={id} id={id} name={name} description={description} imageURL={imageURL} price={price} stock={stock} />
        ))
        : <h3>There are no products to display</h3>
    }
  </StyledShowProducts>
)

export default ShowProducts

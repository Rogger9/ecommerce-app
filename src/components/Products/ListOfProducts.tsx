import { useParams } from 'react-router-dom'
import ProductCard from './ProductCard'
import { StyledListOfProducts } from './style'
import { booksProducts, cellphonesProducts, clothesProducts, electronicsProducts, smartTVProducts, sportsProducts, trendingProducts } from '../../utils/listProducts'
import { GenericKeyString, IProducts } from '../../types'

const listProducts: GenericKeyString<IProducts[]> = {
  Electronics: electronicsProducts,
  'Smart TV': smartTVProducts,
  Cellphones: cellphonesProducts,
  Clothes: clothesProducts,
  Books: booksProducts,
  Sports: sportsProducts
}

const ListOfProducts = () => {
  const { category } = useParams()
  const productsToShow: IProducts[] = category ? listProducts[category] : trendingProducts
  return (
    <StyledListOfProducts>
      {
        productsToShow.length > 0
          ? productsToShow.map(({ id, name, description, imageURL, price, stock }) => (
            <ProductCard key={id} id={id} name={name} description={description} imageURL={imageURL} price={price} stock={stock} />
          ))
          : <h3>There are no products to display</h3>
      }
    </StyledListOfProducts>
  )
}

export default ListOfProducts

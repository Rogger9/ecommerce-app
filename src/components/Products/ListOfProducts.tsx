import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from './ProductCard'
import { api } from '../../api'
import { useProducts } from '../../hooks/useProducts'
import { StyledListOfProducts } from './style'

const ListOfProducts = () => {
  const { category } = useParams()
  const { products, setProducts } = useProducts()

  useEffect(() => {
    api.search(category).then(setProducts)
  }, [category])

  return (
    <StyledListOfProducts>
      {
        products && products.length > 0
          ? products.map(({ id, name, description, imageURL, price, stock, category }) => (
            <ProductCard key={id} id={id} name={name} description={description} imageURL={imageURL} price={price} stock={stock} category={category} />
          ))
          : <h3>There are no products to display</h3>
      }
    </StyledListOfProducts>
  )
}

export default ListOfProducts

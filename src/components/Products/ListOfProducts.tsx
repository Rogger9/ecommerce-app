import { lazy, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../api'
import { useProducts } from '../../hooks/useProducts'
import { StyledListOfProducts } from './style'

const ProductCard = lazy(() => import('./ProductCard'))
const Loader = lazy(() => import('../Loader'))

const ListOfProducts = () => {
  const { category } = useParams()
  const { products, setProducts } = useProducts()

  useEffect(() => {
    setProducts && setProducts([])
    api.search(category).then(setProducts)
  }, [category])

  if (!products) return <h2>Sorry... There are no products to display</h2>
  if (products.length === 0) return <Loader />

  return (
    <StyledListOfProducts>
      {
        products?.map(({ id, name, description, imageURL, price, stock, category }) => (
          <ProductCard key={id} id={id} name={name} description={description} imageURL={imageURL} price={price} stock={stock} category={category} />
        ))
      }
    </StyledListOfProducts>
  )
}

export default ListOfProducts

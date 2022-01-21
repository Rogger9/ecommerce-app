import { useParams } from 'react-router-dom'
import { IProducts } from '../../types'
import { trendingProducts } from '../../utils/listProducts'
import ProductCard from './ProductCard'
import { StyledProductDetail } from './style'

const ProductsDetail = () => {
  const { idProduct } = useParams()
  const product: IProducts = trendingProducts.filter(prod => prod.id === Number(idProduct))[0]

  return (
    <StyledProductDetail>
      <h1>ProductDetail: {product.name}</h1>
      <p>Brand: {product.brand}</p>
      <span>Category: {product.category}</span>
      <ProductCard {...product} />
    </StyledProductDetail>
  )
}

export default ProductsDetail

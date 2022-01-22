import { useParams } from 'react-router-dom'
import { useProducts } from '../../hooks/useProducts'
import { IProducts } from '../../types'
import ProductCard from './ProductCard'
import { StyledProductDetail } from './style'

const ProductsDetail = () => {
  const { idProduct } = useParams()
  const { products } = useProducts()
  const product: IProducts | undefined = products && products.filter(prod => prod.id === Number(idProduct))[0]

  return (
    <StyledProductDetail>
      {
        product
          ? <>
            <h1>ProductDetail: {product.name}</h1>
            <p>Brand: {product.brand}</p>
            <span>Category: {product.category}</span>
            <ProductCard {...product} />
          </>
          : <h1>Error...</h1>
      }
    </StyledProductDetail>
  )
}

export default ProductsDetail

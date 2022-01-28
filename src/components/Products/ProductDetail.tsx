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
            <h1>{product.name.toUpperCase()}</h1>
            <p><b>Brand: </b>{product.brand}</p>
            <span><b>Category: </b>{product.category}</span>
            <ProductCard {...product} />
          </>
          : <h1>Error...</h1>
      }
    </StyledProductDetail>
  )
}

export default ProductsDetail

import { Link } from 'react-router-dom'
import { IProducts } from '../../types'
import { $HOME, $PRODUCTSDETAIL } from '../../routes'
import Icon from '../Icon'
import Button from '../Button'
import { StyledProductCard } from './style'
import imageProductDefault from '../../assets/ProductImage.avif'

const ProductCard = ({ id, name, description, imageURL = '', price, stock, category }: IProducts) => {
  const imageToUse = imageURL !== '' ? imageURL : imageProductDefault

  return (
    <Link to={`${$HOME + $PRODUCTSDETAIL}/${id}`}>
      <StyledProductCard>
        <header>
          <h2>{name}</h2>
          <p>{description}</p>
        </header>
        <img src={imageToUse} alt={name} width='240' height='160' />
        <h3>${price}</h3>
        <span><b>Category:</b> {category}</span>
        <footer>
          <Button label='iconHeart' page><Icon iconStyle='fas' icon='heart' /></Button>
          <span>Stock: {stock}</span>
          <Button label='iconShopping' page><Icon iconStyle='fas' icon='shopping-cart' /></Button>
        </footer>
      </StyledProductCard>
    </Link>
  )
}

export default ProductCard

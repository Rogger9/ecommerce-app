import { IProducts } from '../../types'
import Icon from '../Icon'
import { StyledProductCard } from './style'
import imageProductDefault from '../../assets/ProductImage.avif'
import Button from '../Button'

const ProductCard = ({ name, description, imageURL = '', price, stock }: IProducts) => {
  const imageToUse = imageURL !== '' ? imageURL : imageProductDefault

  return (
    <StyledProductCard>
      <header>
        <h2>{name}</h2>
        <p>{description}</p>
      </header>
      <img src={imageToUse} alt={name} width='240' height='160' />
      <h3>${price}</h3>
      <footer>
        <Button label='iconHeart' page><Icon iconStyle='fas' icon='heart' /></Button>
        <span>stock: {stock}</span>
        <Button label='iconShopping' page><Icon iconStyle='fas' icon='shopping-cart' /></Button>
      </footer>
    </StyledProductCard>
  )
}

export default ProductCard

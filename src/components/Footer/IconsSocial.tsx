import { Link } from 'react-router-dom'
import Icon from '../Icon'
import { StyledIcons } from './style'

const IconsSocial = () => (
  <StyledIcons>
    <Link to='#'><Icon iconStyle='fab' icon='whatsapp' size='1x' /></Link>
    <Link to='#'><Icon iconStyle='fab' icon='instagram' size='1x' /></Link>
    <Link to='#'><Icon iconStyle='fab' icon='facebook-square' size='1x' /></Link>
  </StyledIcons>
)

export default IconsSocial

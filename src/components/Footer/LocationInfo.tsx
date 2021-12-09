import { Link } from 'react-router-dom'
import Icon from '../Icon'
import { StyledIcons } from './style'

const LocationInfo = () => (
  <StyledIcons>
    <Link to='#'><Icon iconStyle='fas' icon='map-marked-alt' size='1x' /></Link>
    |
    <Link to='#'><Icon iconStyle='fas' icon='envelope' size='1x' /></Link>
    correo@correo.com
  </StyledIcons>
)

export default LocationInfo

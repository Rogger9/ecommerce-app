import { Link } from 'react-router-dom'
import { StyledLogo } from './style'
import logo from '../../assets/LogoCodeAr-Min.avif'
import { $HOME } from '../../routes'

const Logo = () => (
  <Link to={$HOME}>
    <StyledLogo src={logo} alt='Logo ecommerce' />
  </Link>
)

export default Logo

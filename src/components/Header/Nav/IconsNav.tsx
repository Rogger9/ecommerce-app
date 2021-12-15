import { Route, Link, Routes } from 'react-router-dom'
import { $HOME, $USER } from '../../../routes'
import Icon from '../../Icon'
import IconsPathUser from './IconsPathUser'
import { StyledIconsNav } from './style'

const IconsNav = () => (
  <StyledIconsNav>
    <Icon iconStyle='fas' icon='shopping-cart' />
    <Routes>
      <Route index element={<Link to={$HOME + $USER}><Icon iconStyle='fas' icon='user' /></Link>} />
      <Route path={$USER} element={<IconsPathUser />} />
    </Routes>
  </StyledIconsNav>
)

export default IconsNav

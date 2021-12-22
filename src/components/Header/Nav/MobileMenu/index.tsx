import { Route, Routes } from 'react-router-dom'
import { $HOME, $USER } from '../../../../routes'
import Icon from '../../../Icon'
import ListMobileMenu from './ListMobileMenu'
import { menu, menu2 } from '../../../../utils/mobileMenuList'
import { StyledMobileMenu } from './style'

const MobileMenu = () => (
  <StyledMobileMenu htmlFor='mobileMenu'>
    <Icon iconStyle='fas' icon='ellipsis-v' />
    <input type='checkbox' name='mobileMenu' id='mobileMenu' />
    <Routes>
      <Route path={$HOME} element={<ListMobileMenu menu={menu} />} />
      <Route path={$USER} element={<ListMobileMenu menu={menu2} />} />
    </Routes>
  </StyledMobileMenu>
)

export default MobileMenu

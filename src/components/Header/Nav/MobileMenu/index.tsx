import Icon from '../../../Icon'
import ListMobileMenu from './ListMobileMenu'
import { StyledMobileMenu } from './style'

const MobileMenu = () => (
  <StyledMobileMenu htmlFor='mobileMenu'>
    <Icon iconStyle='fas' icon='ellipsis-v' />
    <input type='checkbox' name='mobileMenu' id='mobileMenu' />
    <ListMobileMenu />
  </StyledMobileMenu>
)

export default MobileMenu

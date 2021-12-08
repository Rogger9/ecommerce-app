import Icon from '../Icon'
import MenuNav from './MenuNav'
import { StyledNavBar, StyledSwitchNavBar } from './style'

const NavBar = () => (
  <StyledNavBar>
    <StyledSwitchNavBar htmlFor='switchNavBar'>
      <Icon iconStyle='fas' icon='compress-arrows-alt' size='1x' />
    </StyledSwitchNavBar>
    <input type='checkbox' name='switchNavBar' id='switchNavBar' />
    <MenuNav />
  </StyledNavBar>
)

export default NavBar

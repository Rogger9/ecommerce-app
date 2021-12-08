import Icon from '../Icon'
import ListNav from './ListNav'
import { StyledNavBar, StyledSwitchNavBar } from './style'

const NavBar = () => (
  <StyledNavBar>
    <StyledSwitchNavBar htmlFor='switchNavBar'>
      <Icon iconStyle='fas' icon='compress-arrows-alt' size='1x' />
    </StyledSwitchNavBar>
    <input type='checkbox' name='switchNavBar' id='switchNavBar' />
    <ListNav />
  </StyledNavBar>
)

export default NavBar

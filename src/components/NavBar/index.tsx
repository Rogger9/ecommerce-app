import Icon from '../Icon'
import { StyledNavBar, StyledSwitchNavBar } from './style'

const NavBar = () => (
  <StyledNavBar>
    <StyledSwitchNavBar htmlFor='switchNavBar'>
      <input type='checkbox' name='switchNavBar' id='switchNavBar' />
      <Icon iconStyle='fas' icon='compress-arrows-alt' size='1x' />
      <h3>NavBar</h3>
    </StyledSwitchNavBar>
  </StyledNavBar>
)

export default NavBar

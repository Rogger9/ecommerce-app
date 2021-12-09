import { useNavSize } from '../../hooks/useNavSize'
import Icon from '../Icon'
import MenuNav from './MenuNav'
import { StyledNavBar, StyledSwitchNavBar } from './style'

const NavBar = () => {
  const { isNormalSize, changeSize } = useNavSize()
  return (
    <StyledNavBar>
      <StyledSwitchNavBar htmlFor='switchNavBar'>
        <Icon iconStyle='fas' icon='compress-arrows-alt' size='1x' handleClick={changeSize} />
      </StyledSwitchNavBar>
      <input type='checkbox' name='switchNavBar' id='switchNavBar' />
      <MenuNav normalSize={isNormalSize} />
    </StyledNavBar>
  )
}

export default NavBar

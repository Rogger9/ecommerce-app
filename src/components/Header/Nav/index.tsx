import { useScreenWidth } from '../../../hooks/useScreenWidth'
import FormSearch from '../FormSearch'
import SwitchTheme from '../SwitchTheme'
import IconsNav from './IconsNav'
import MobileMenu from './MobileMenu'
import { StyledNav } from './style'

const Nav = () => {
  const { isMobileScreen } = useScreenWidth()
  const menuToDisplay = isMobileScreen ? <MobileMenu /> : <IconsNav />
  return (
    <StyledNav>
      <FormSearch />
      <SwitchTheme />
      {menuToDisplay}
    </StyledNav>
  )
}

export default Nav

import { GetScreenWidth } from '../../../services/GetScreenWidth.service'
import FormSearch from '../FormSearch'
import SwitchTheme from '../SwitchTheme'
import IconsNav from './IconsNav'
import MobileMenu from './MobileMenu'
import { StyledNav } from './style'

const { isMobileScreen } = GetScreenWidth()
const menuToDisplay = isMobileScreen ? <MobileMenu /> : <IconsNav />

const Nav = () => (
  <StyledNav>
    <FormSearch />
    <SwitchTheme />
    {menuToDisplay}
  </StyledNav>
)

export default Nav

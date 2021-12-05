import FormSearch from '../FormSearch'
import SwitchTheme from '../SwitchTheme'
import IconsNav from './IconsNav'
import { StyledNav } from './style'

const Nav = () => (
  <StyledNav>
    <FormSearch />
    <SwitchTheme />
    <IconsNav />
  </StyledNav>
)

export default Nav

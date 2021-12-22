import { lazy } from 'react'
import { useScreenWidth } from '../../../hooks/useScreenWidth'
import FormSearch from '../FormSearch'
import SwitchTheme from '../SwitchTheme'
import { StyledNav } from './style'

const MobileMenu = lazy(() => import('./MobileMenu'))
const IconsNav = lazy(() => import('./IconsNav'))

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

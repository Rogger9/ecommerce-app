import { lazy } from 'react'
import { Route, Link, Routes } from 'react-router-dom'
import { $ACCOUNTS, $HOME, $LOGIN, $USER } from '../../../routes'
import Icon from '../../Icon'
import { StyledIconsNav } from './style'

const IconsPathUser = lazy(() => import('./IconsPathUser'))

const IconsNav = () => (
  <StyledIconsNav>
    <Icon iconStyle='fas' icon='shopping-cart' />
    <Routes>
      <Route index element={<Link to={$HOME + $ACCOUNTS + $LOGIN}><Icon iconStyle='fas' icon='user' /></Link>} />
      <Route path={$USER} element={<IconsPathUser />} />
    </Routes>
  </StyledIconsNav>
)

export default IconsNav

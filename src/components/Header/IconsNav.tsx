import { Route, Link, Routes } from 'react-router-dom'
import { $HOME, $USER } from '../../routes'
import SwitchTheme from './SwitchTheme'
import Icon from '../Icon'

const PathUser = () => (
  <>
    <Icon iconStyle='fas' icon='heart' />
    <Link to={$HOME}><Icon iconStyle='fas' icon='sign-out-alt' /></Link>
  </>
)

const IconsNav = () => (
  <>
    <SwitchTheme />
    <Icon iconStyle='fas' icon='shopping-cart' />
    <Routes>
      <Route path={$HOME} element={<Link to={$USER}><Icon iconStyle='fas' icon='user' /></Link>} />
      <Route path={$USER} element={<PathUser />} />
    </Routes>
  </>
)

export default IconsNav

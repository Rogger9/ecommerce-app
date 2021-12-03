import { Route, Link, Routes } from 'react-router-dom'
import { $HOME, $USER } from '../../routes'
import IconExit from '../IconExit'
import IconHeart from '../IconHeart'
import IconShoppingCart from '../IconShoppingCart'
import IconUser from '../IconUser'
import SwitchTheme from './SwitchTheme'

const PathUser = () => (
  <>
    <IconHeart />
    <Link to={$HOME}><IconExit /></Link>
  </>
)

const IconsNav = () => (
  <>
    <SwitchTheme />
    <IconShoppingCart />
    <Routes>
      <Route path={$HOME} element={<Link to={$USER}><IconUser /></Link>} />
      <Route path={$USER} element={<PathUser />} />
    </Routes>
  </>
)

export default IconsNav

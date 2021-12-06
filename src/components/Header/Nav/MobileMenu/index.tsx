import { Route, Routes } from 'react-router-dom'
import { $HOME, $USER } from '../../../../routes'
import Icon from '../../../Icon'
import ListMobileMenu from './ListMobileMenu'
import { StyledMobileMenu } from './style'

interface IListMenu {
  [key: string]: string
}

const menu: IListMenu[] = [{ id: 'login', value: 'Iniciar Sesión' }, { id: 'shopping', value: 'Carrito' }]

const menu2: IListMenu[] = [{ id: 'shopping', value: 'Carrito' }, { id: 'favorites', value: 'Favoritos' }, { id: 'logout', value: 'Cerrar Sesión' }]

const MobileMenu = () => (
  <StyledMobileMenu htmlFor='mobileMenu'>
    <Icon iconStyle='fas' icon='ellipsis-v' />
    <input type='checkbox' name='mobileMenu' id='mobileMenu' />
    <Routes>
      <Route path={$HOME} element={<ListMobileMenu menu={menu} />} />
      <Route path={$USER} element={<ListMobileMenu menu={menu2} />} />
    </Routes>

  </StyledMobileMenu>
)

export default MobileMenu

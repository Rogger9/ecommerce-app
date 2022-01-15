import { $ACCOUNTS, $HOME, $LOGIN } from '../routes'
import { IListMenu, IPathTo } from '../types'

export const menu: IListMenu[] = [
  { id: 'login', value: 'Iniciar Sesión' },
  { id: 'shopping', value: 'Carrito' }
]

export const menu2: IListMenu[] = [
  { id: 'shopping', value: 'Carrito' },
  { id: 'favorites', value: 'Favoritos' },
  { id: 'logout', value: 'Cerrar Sesión' }
]

export const navigatePaths: IPathTo = {
  login: $HOME + $ACCOUNTS + $LOGIN
}

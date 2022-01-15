import { $ACCOUNTS, $HOME, $LOGIN } from '../routes'
import { GenericKeyString } from '../types'

export const menu: GenericKeyString<string>[] = [
  { id: 'login', value: 'Iniciar Sesión' },
  { id: 'shopping', value: 'Carrito' }
]

export const menu2: GenericKeyString<string>[] = [
  { id: 'shopping', value: 'Carrito' },
  { id: 'favorites', value: 'Favoritos' },
  { id: 'logout', value: 'Cerrar Sesión' }
]

export const navigatePaths: GenericKeyString<string> = {
  login: $HOME + $ACCOUNTS + $LOGIN
}

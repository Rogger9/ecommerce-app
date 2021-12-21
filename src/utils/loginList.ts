import { IListForm } from '../types'

export const loginList: IListForm[] = [
  {
    name: 'Email',
    type: 'email',
    id: 'email',
    placeholder: 'correo@correo.com'
  },
  {
    name: 'Contraseña',
    type: 'password',
    id: 'password',
    placeholder: 'Ingrese su contraseña'
  }
]

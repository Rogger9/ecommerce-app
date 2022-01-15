import { GenericKeyString } from '../types'

export const registerList: GenericKeyString<string>[] = [
  {
    name: 'Email',
    type: 'email',
    id: 'email',
    placeholder: 'correo@correo.com'
  },
  {
    name: 'Nombre de Ususario',
    type: 'text',
    id: 'username',
    placeholder: 'Ingrese nombre de usuario'
  },
  {
    name: 'Contraseña',
    type: 'password',
    id: 'password',
    placeholder: 'Ingrese su contraseña'
  },
  {
    name: 'Confirmar contraseña',
    type: 'password',
    id: 'repeatPassword',
    placeholder: 'Repita su contraseña'
  }
]

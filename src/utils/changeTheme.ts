import { BodyDocument } from '../services/BodyDocument.service'
import { LocalStorage } from '../services/LocalStorage.service'

export const changeTheme = (name: string = 'theme') => {
  const themeUser = BodyDocument.get(name)
  const toUse: string = themeUser === 'dark' ? 'light' : 'dark'
  LocalStorage.set(name, toUse)
  BodyDocument.set(name, toUse)
}

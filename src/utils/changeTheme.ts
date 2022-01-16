import { Services } from '../services'

export const changeTheme = (name: string = 'theme') => {
  const themeUser = Services.getTheme(name)
  const toUse: string = themeUser === 'dark' ? 'light' : 'dark'
  Services.setLocalStorage(name, toUse)
  Services.setTheme(name, toUse)
}

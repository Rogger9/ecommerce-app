import { Services } from '../services'

export const checkPrevUserTheme = () => {
  const savedTheme = Services.getLocalStorage('theme')
  const themeToUse = savedTheme ?? 'dark'
  Services.setTheme('theme', themeToUse)
}

import { BodyDocument } from '../services/BodyDocument.service'
import { LocalStorage } from '../services/LocalStorage.service'

export const checkPrevUserTheme = () => {
  const savedTheme = LocalStorage.get('theme')
  const themeToUse = savedTheme ?? 'dark'
  BodyDocument.set('theme', themeToUse)
}

import { darkTheme, getTheme, lightTheme } from '@/theme'
import { Services } from '@services'
import { setTheme } from '@store/actions/themeActions'
import { RootState } from '@store/reducers/rootReducer'
import { getPreferredTheme } from '@utils/getPreferredTheme'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const useTheme = () => {
  const { theme } = useSelector((state: RootState) => state.themeReducer)
  const dispatch = useDispatch()

  const mode = theme === 'light' ? lightTheme : darkTheme
  const themeUser = getTheme(mode)

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    Services.setLocalStorage('theme', newTheme)
    console.log('entra')
    dispatch(setTheme(newTheme))
  }

  useEffect(() => {
    const themeSave = Services.getLocalStorage('theme')
    const preferredTheme = getPreferredTheme()
    const themeToUse = themeSave ?? preferredTheme
    dispatch(setTheme(themeToUse))
  }, [])

  return { themeUser, changeTheme }
}

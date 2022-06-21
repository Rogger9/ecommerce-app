import { darkTheme, getTheme, lightTheme } from '@/theme'
import { Services } from '@services'
import { setTheme } from '@store/actions/themeActions'
import { RootState } from '@store/reducers/rootReducer'
import { useDispatch, useSelector } from 'react-redux'

export const useTheme = () => {
  const { theme } = useSelector((state: RootState) => state.themeReducer)
  const dispatch = useDispatch()

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    Services.setLocalStorage('theme', newTheme)
    dispatch(setTheme(newTheme))
  }

  const mode = theme === 'light' ? lightTheme : darkTheme
  const themeUser = getTheme(mode)

  return { themeUser, changeTheme }
}

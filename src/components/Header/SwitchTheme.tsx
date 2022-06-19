import { setTheme } from '@store/actions/themeActions'
import { RootState } from '@store/reducers/rootReducer'
import { useDispatch, useSelector } from 'react-redux'
import { StyledSwitch } from './style'

const SwitchTheme = () => {
  const { theme } = useSelector((state: RootState) => state.themeReducer)
  const dispatch = useDispatch()

  const handleChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    dispatch(setTheme(newTheme))
  }

  return (
    <StyledSwitch htmlFor='switchTheme' onChange={handleChange}>
      <input type='checkbox' name='switchTheme' id='switchTheme' />
      <span />
    </StyledSwitch>
  )
}

export default SwitchTheme

import { useTheme } from '@hooks/useTheme'
import { StyledSwitch } from './style'

const SwitchTheme = () => {
  const { changeTheme } = useTheme()

  return (
    <StyledSwitch htmlFor='switchTheme' onChange={changeTheme}>
      <input type='checkbox' name='switchTheme' id='switchTheme' />
      <span />
    </StyledSwitch>
  )
}

export default SwitchTheme

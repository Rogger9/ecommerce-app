import { StyledSwitch } from './style'

const SwitchTheme = () => {
  return (
    <StyledSwitch htmlFor='switchTheme'>
      <input type='checkbox' name='switchTheme' id='switchTheme' />
      <span />
    </StyledSwitch>
  )
}

export default SwitchTheme

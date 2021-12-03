import { changeTheme } from '../../utils/changeTheme'
import { StyledSwitch } from './style'

const SwitchTheme = () => (
  <StyledSwitch htmlFor='switchTheme' onChange={() => changeTheme()}>
    <input type='checkbox' name='switchTheme' id='switchTheme' />
    <span />
  </StyledSwitch>
)

export default SwitchTheme

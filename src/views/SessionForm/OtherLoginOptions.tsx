import { Link } from 'react-router-dom'
import Icon from '../../components/Icon'
import { StyledOtherLogin } from './style'

const OtherLoginOptions = () => (
  <StyledOtherLogin>
    <span>Inicia sesión con</span>
    <Link to='https://google.com' target='_blank' rel='noopener noreferrer'><Icon iconStyle='fab' icon='google' /></Link>
    <Link to='https://facebook.com' target='_blank' rel='noopener noreferrer'><Icon iconStyle='fab' icon='facebook-f' /></Link>
  </StyledOtherLogin>
)

export default OtherLoginOptions

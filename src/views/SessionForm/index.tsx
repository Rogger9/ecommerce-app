import { Link, Route, Routes } from 'react-router-dom'
import Icon from '../../components/Icon'
import { $LOGIN, $REGISTER } from '../../routes'
import Login from './Login'
import Register from './Register'
import OtherLoginOptions from './OtherLoginOptions'
import { LineDivisor, StyledSessionForm } from './style'

const SessionForm = () => {
  return (
    <StyledSessionForm>
      <Icon iconStyle='fas' icon='arrow-alt-circle-left' />
      <Routes>
        <Route path={$LOGIN} element={<Login />} />
        <Route path={$REGISTER} element={<Register />} />
      </Routes>
      <LineDivisor><hr /><span>Or</span></LineDivisor>
      <OtherLoginOptions />
      <Link to='#'>Políticas de privacidad</Link>
    </StyledSessionForm>
  )
}

export default SessionForm

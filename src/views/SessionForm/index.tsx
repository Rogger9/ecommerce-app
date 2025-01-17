import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Icon from '../../components/Icon'
import OtherLoginOptions from './OtherLoginOptions'
import { $LOGIN, $REGISTER } from '../../routes'
import { LineDivisor, StyledSessionForm } from './style'
import { lazy } from 'react'

const Login = lazy(() => import('./Login'))
const Register = lazy(() => import('./Register'))

const SessionForm = () => {
  const navegate = useNavigate()
  const prevPage = () => navegate(-1)

  return (
    <StyledSessionForm>
      <Icon iconStyle='fas' icon='arrow-alt-circle-left' handleClick={prevPage} />
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

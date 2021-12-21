import { Link } from 'react-router-dom'
import { $ACCOUNTS, $HOME, $REGISTER } from '../../../routes'
import { loginList } from '../../../utils/loginList'
import Form from '../Form'

const Login = () => (
  <>
    <h2>Iniciar Sesión</h2>
    <Form list={loginList} submit='Iniciar sesión' />
    <span>¿Ya estás registrado?<Link to={$HOME + $ACCOUNTS + $REGISTER}>Regístrate</Link></span>
  </>
)

export default Login

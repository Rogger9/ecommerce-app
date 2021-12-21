import { registerList } from '../../../utils/registerList'
import Form from '../Form'

const Register = () => (
  <>
    <h2>Registrarse</h2>
    <Form list={registerList} submit='Registrarse' />
  </>
)

export default Register

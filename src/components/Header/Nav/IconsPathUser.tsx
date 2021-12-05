import { Link } from 'react-router-dom'
import { $HOME } from '../../../routes'
import Icon from '../../Icon'

const IconsPathUser = () => (
  <>
    <Icon iconStyle='fas' icon='heart' />
    <Link to={$HOME}><Icon iconStyle='fas' icon='sign-out-alt' /></Link>
  </>
)

export default IconsPathUser

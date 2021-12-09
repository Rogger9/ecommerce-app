import { Link } from 'react-router-dom'
import { IMenuListNav } from '../../../types'
import Icon from '../../Icon'
import { StyledLiMenu } from './style'
import SubListNav from './SubListNav'

const ListMenu = ({ name, icon, subMenu, normalSize = true }: IMenuListNav) => (
  <StyledLiMenu>
    <Link to='#'>
      <div><Icon iconStyle='fas' icon={icon} /></div>
      {normalSize && name}
    </Link>
    {
      subMenu !== undefined && <SubListNav subMenu={subMenu} />
    }
  </StyledLiMenu>
)

export default ListMenu
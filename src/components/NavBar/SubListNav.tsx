import { Link } from 'react-router-dom'
import { StyledListNav } from './style'

interface Props {
  subMenu: string[]
}

const SubListNav = ({ subMenu }: Props) => (
  <StyledListNav>
    {
      subMenu.map((submenu: string) => <li key={submenu}><Link to='#'>{submenu}</Link></li>)
    }
  </StyledListNav>
)

export default SubListNav

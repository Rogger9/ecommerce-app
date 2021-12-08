import { Link } from 'react-router-dom'
import { StyledLiMenu, StyledMenuNav } from './style'

interface Props {
  subMenu: string[]
}

const SubListNav = ({ subMenu }: Props) => (
  <StyledMenuNav>
    {
      subMenu.map((submenu: string) => <StyledLiMenu key={submenu}><Link to='#'>{submenu}</Link></StyledLiMenu>)
    }
  </StyledMenuNav>
)

export default SubListNav

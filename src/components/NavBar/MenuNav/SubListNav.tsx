import { Link } from 'react-router-dom'
import { StyledLiMenu, StyledMenuNav } from './style'

interface IProps {
  subMenu: string[]
}

const SubListNav = ({ subMenu }: IProps) => (
  <StyledMenuNav>
    {
      subMenu.map((submenu: string) => <StyledLiMenu key={submenu}><Link to='#'>{submenu}</Link></StyledLiMenu>)
    }
  </StyledMenuNav>
)

export default SubListNav

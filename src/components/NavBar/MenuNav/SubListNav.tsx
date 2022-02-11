import { Link } from 'react-router-dom'
import { $HOME, $PRODUCTS } from '../../../routes'
import { StyledLiMenu, StyledMenuNav } from './style'

interface IProps {
  subMenu: string[]
}

const setPath = (path: string): string => {
  const normalizePath = path.replace(/\s/g, '-').toLowerCase()
  return $HOME + $PRODUCTS + '/' + normalizePath
}

const SubListNav = ({ subMenu }: IProps) => (
  <StyledMenuNav>
    {
      subMenu.map((submenu: string) => (
        <StyledLiMenu key={submenu}>
          <Link to={setPath(submenu)}>{submenu}</Link>
        </StyledLiMenu>
      ))
    }
  </StyledMenuNav>
)

export default SubListNav

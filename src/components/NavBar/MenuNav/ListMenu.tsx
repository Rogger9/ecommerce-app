import { lazy } from 'react'
import { Link } from 'react-router-dom'
import { $HOME } from '../../../routes'
import { IMenuListNav } from '../../../types'
import Icon from '../../Icon'
import { StyledLiMenu } from './style'

const SubListNav = lazy(() => import('./SubListNav'))

const setPath = (path: string): string => {
  const normalizePath = path.toLowerCase().replace(/\s/g, '-')
  if (normalizePath === 'home') return $HOME
  return $HOME + '/' + normalizePath
}

const ListMenu = ({ name, icon, subMenu, normalSize = true }: IMenuListNav) => (
  <StyledLiMenu>
    <Link to={setPath(name)}>
      <div><Icon iconStyle='fas' icon={icon} /></div>
      {normalSize && name}
    </Link>
    {
      subMenu !== undefined && <SubListNav subMenu={subMenu} />
    }
  </StyledLiMenu>
)

export default ListMenu

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Link } from 'react-router-dom'
import Icon from '../Icon'
import { StyledListNav } from './style'
import SubListNav from './SubListNav'

interface IMenuListNav {
  name: string
  icon: IconProp
  subMenu?: string[]
}

const menuList: IMenuListNav[] = [
  { name: 'Home', icon: 'home' },
  { name: 'Categories', icon: 'database', subMenu: ['Electronics', 'Smart TV', 'Cellphones', 'Clothes', 'Books', 'Sports'] },
  { name: 'Trending Products', icon: 'chart-bar' },
  { name: 'Brands', icon: 'bold' },
  { name: 'Services', icon: 'globe-americas' },
  { name: 'About', icon: 'info' }
]

const ListNav = () => {
  return (
    <StyledListNav>
      {
        menuList.map(({ name, icon, subMenu }) => (
          <li key={name}>
            <Link to='#'>
              <div>
                <Icon iconStyle='fas' icon={icon} />
              </div>
              {name}
            </Link>
            {
              subMenu !== undefined && (
                <>
                  <Icon iconStyle='fas' icon='angle-left' />
                  <SubListNav subMenu={subMenu} />
                </>
              )
            }
          </li>
        ))
      }
    </StyledListNav>
  )
}

export default ListNav

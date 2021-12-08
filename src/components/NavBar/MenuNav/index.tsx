import { menuNav } from '../../../utils/menuNav'
import ListMenu from './ListMenu'
import { StyledMenuNav } from './style'

const MenuNav = () => (
  <StyledMenuNav>
    {
      menuNav.map(({ name, icon, subMenu }) => <ListMenu key={name} name={name} icon={icon} subMenu={subMenu} />)
    }
  </StyledMenuNav>
)

export default MenuNav

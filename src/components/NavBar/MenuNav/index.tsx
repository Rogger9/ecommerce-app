import { menuNav } from '../../../utils/menuNav'
import ListMenu from './ListMenu'
import { StyledMenuNav } from './style'

interface Props {
  normalSize?: boolean
}

const MenuNav = ({ normalSize }: Props) => (
  <StyledMenuNav>
    {
      menuNav.map(({ name, icon, subMenu }) => <ListMenu key={name} name={name} icon={icon} subMenu={subMenu} normalSize={normalSize} />)
    }
  </StyledMenuNav>
)

export default MenuNav

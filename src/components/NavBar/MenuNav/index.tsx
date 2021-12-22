import { menuNav } from '../../../utils/menuNav'
import ListMenu from './ListMenu'
import { StyledMenuNav } from './style'

interface IProps {
  normalSize?: boolean
}

const MenuNav = ({ normalSize }: IProps) => (
  <StyledMenuNav>
    {
      menuNav.map(({ name, icon, subMenu }) => <ListMenu key={name} name={name} icon={icon} subMenu={subMenu} normalSize={normalSize} />)
    }
  </StyledMenuNav>
)

export default MenuNav

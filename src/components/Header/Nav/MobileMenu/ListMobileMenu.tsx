import LiMenu from './LiMenu'
import { StyledListMobileMenu } from './style'

interface IListMenu {
  [key: string]: string
}

interface IListMobileMenu {
  menu: IListMenu[]
}

const ListMobileMenu = ({ menu }: IListMobileMenu) => (
  <StyledListMobileMenu>
    {
      menu.map(({ id, value }) => <LiMenu key={id} id={id} value={value} />)
    }
  </StyledListMobileMenu>
)

export default ListMobileMenu

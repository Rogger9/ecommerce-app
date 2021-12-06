import LiMenu from './LiMenu'
import { StyledListMobileMenu } from './style'

interface IListMenu {
  [key: string]: string
}

const menu: IListMenu[] = [{ id: 'login', value: 'Iniciar Sesión' }, { id: 'shopping', value: 'Carrito' }]

const ListMobileMenu = () => (
  <StyledListMobileMenu>
    {
      menu.map(({ id, value }) => <LiMenu key={id} id={id} value={value} />)
    }
  </StyledListMobileMenu>
)

export default ListMobileMenu

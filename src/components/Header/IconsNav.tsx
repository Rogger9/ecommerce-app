import { useLocation, Link } from 'react-router-dom'
import { $HOME, $USER } from '../../routes'
import IconExit from '../IconExit'
import IconHeart from '../IconHeart'
import IconShoppingCart from '../IconShoppingCart'
import IconUser from '../IconUser'

const pathUser = () => (
  <>
    <IconHeart />
    <Link to={$HOME}><IconExit /></Link>
  </>
)

interface IPaths {
  [key: string]: JSX.Element
}

const paths: IPaths = {
  $HOME: <Link to={$USER}><IconUser /></Link>,
  $USER: pathUser()
}

const IconsNav = () => {
  const location = useLocation()
  const { pathname } = location
  console.log(paths)
  return (
    <>
      <IconShoppingCart />
      {/* {pathname === $HOME && <Link to={$USER}><IconUser /></Link>}
      {pathname === $USER && (
        <>
          <IconHeart />
          <Link to={$HOME}><IconExit /></Link>
        </>
      )} */}

      {paths[pathname]}
    </>
  )
}

export default IconsNav

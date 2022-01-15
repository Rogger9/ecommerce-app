import { useNavigate } from 'react-router-dom'
import { MouseEventLiElement } from '../../../../types'
import { navigatePaths } from '../../../../utils/mobileMenuList'

interface IProps {
  value: string
  id: string
}

const LiMenu = ({ value, id }: IProps) => {
  const navigate = useNavigate()

  const handleClick: MouseEventLiElement = (e) => {
    const action = (e.target as HTMLElement).id
    return navigate(navigatePaths[action] ?? '')
  }

  return <li onClick={handleClick} id={id}>{value}</li>
}

export default LiMenu

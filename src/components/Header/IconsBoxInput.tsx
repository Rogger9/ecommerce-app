import Button from '../Button'
import Icon from '../Icon'

interface IShowIcons {
  resetKeyword: () => void
}

const IconsBoxInput = ({ resetKeyword }: IShowIcons) => (
  <>
    <Icon iconStyle='fas' icon='times' size='1x' handleClick={resetKeyword} />
    <Button value='Buscar' />
  </>
)

export default IconsBoxInput

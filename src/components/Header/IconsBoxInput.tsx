import Button from '../Button'
import IconClose from '../IconClose'

interface IShowIcons {
  resetKeyword: () => void
}

const IconsBoxInput = ({ resetKeyword }: IShowIcons) => (
  <>
    <IconClose onClick={resetKeyword} />
    <Button value='Buscar' />
  </>
)

export default IconsBoxInput

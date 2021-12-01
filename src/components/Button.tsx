import { StyledButton } from '../styles/StyledButton'

interface IButton {
  value: string
}

const Button = ({ value }: IButton) => (
  <StyledButton>{value}</StyledButton>
)

export default Button

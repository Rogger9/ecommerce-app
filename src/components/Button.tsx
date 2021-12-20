import { StyledButton } from '../styles/StyledButton'

interface IButton {
  value: string
  label: string
  page: boolean
}

const Button = ({ value, label, page }: IButton) => (
  <StyledButton aria-label={label} page={page}>{value}</StyledButton>
)

export default Button

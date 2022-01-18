import { ReactNode } from 'react'
import { StyledButton } from '../styles/StyledButton'

interface IButton {
  value?: string
  label: string
  page?: boolean
  children?: ReactNode
}

const Button = ({ value, label, page = false, children }: IButton) => (
  <StyledButton aria-label={label} page={page}>{value ?? children}</StyledButton>
)

export default Button

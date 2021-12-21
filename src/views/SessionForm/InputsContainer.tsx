import { StyledInputs } from './style'

interface IProps {
  name: string
  type: string
  id: string
  placeholder: string
}
const InputsContainer = ({ name, type, id, placeholder }: IProps) => (
  <StyledInputs>
    <label htmlFor={id}>{name}</label>
    <input type={type} id={id} placeholder={placeholder} required/>
  </StyledInputs>
)

export default InputsContainer

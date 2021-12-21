import Button from '../../components/Button'
import InputsContainer from './InputsContainer'
import { IListForm } from '../../types'
import { StyledForm } from './style'

interface IProps {
  list: IListForm[]
  submit: string
}

const Form = ({ list, submit }: IProps) => {
  return (
    <StyledForm>
      {
        list.map(({ name, type, id, placeholder }) => <InputsContainer key={id} name={name} type={type} id={id} placeholder={placeholder} />)
      }
      <Button label={submit} value={submit} page/>
    </StyledForm>
  )
}

export default Form

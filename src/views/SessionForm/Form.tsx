import Button from '../../components/Button'
import InputsContainer from './InputsContainer'
import { IListForm } from '../../types'

interface IProps {
  list: IListForm[]
  submit: string
}

const Form = ({ list, submit }: IProps) => {
  return (
    <form>
      {
        list.map(({ name, type, id, placeholder }) => <InputsContainer key={id} name={name} type={type} id={id} placeholder={placeholder} />)
      }
      <Button label={submit} value={submit} page/>
    </form>
  )
}

export default Form

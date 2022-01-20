import { StyledService } from './style'

interface IProps {
  title: string
  description: string
}

const Service = ({ title, description }: IProps) => (
  <StyledService>
    <h3>{title}</h3>
    <p>{description}</p>
  </StyledService>
)

export default Service

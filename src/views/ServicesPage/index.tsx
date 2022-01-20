import { listServices } from '../../utils/listServices'
import Service from './Service'
import { StyledServicesPage } from './style'

const ServicesPage = () => (
  <StyledServicesPage>
    <h1>Hello. What can we help you with?</h1>
    {
      listServices.map(({ title, description }) => <Service key={title} title={title} description={description} />)
    }
  </StyledServicesPage>
)

export default ServicesPage

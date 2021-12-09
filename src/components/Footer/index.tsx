import IconsSocial from './IconsSocial'
import LocationInfo from './LocationInfo'
import { StyledFooter } from './style'

const Footer = () => (
  <StyledFooter>
    <IconsSocial />
    <span>CodeAr <sub>Inc.</sub></span>
    <LocationInfo />
  </StyledFooter>
)

export default Footer

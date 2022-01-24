import { Link } from 'react-router-dom'
import { $HOME } from '../../routes'
import { StyledPageError } from './style'

const PageError = () => (
  <StyledPageError>
    <h1>Sorry! This page could not be accessed. Go to <Link to={$HOME}>Home</Link></h1>
  </StyledPageError>
)

export default PageError

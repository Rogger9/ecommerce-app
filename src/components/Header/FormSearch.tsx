import IconSearch from '../IconSearch'
import { BoxInputSearch, StyledFormSearch } from './style'

const FormSearch = () => {
  return (
    <StyledFormSearch>
      <input type='checkbox' name='check' id='check' />
      <BoxInputSearch>
        <input type='text' name='keywordSearch' id='keywordSearch' />
      </BoxInputSearch>
      <label htmlFor='check'>
        <IconSearch />
      </label>
    </StyledFormSearch>
  )
}

export default FormSearch

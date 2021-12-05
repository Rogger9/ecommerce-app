import { useState } from 'react'
import { ChangeEventForm, ChangeEventInput } from '../../../types'
import IconsBoxInput from './IconsBoxInput'
import Icon from '../../Icon'
import { BoxInputSearch, StyledFormSearch } from './style'

const FormSearch = () => {
  const [keyword, setKeyword] = useState<string>('')
  const keywordLength: boolean = keyword.length > 0

  const handleChange: ChangeEventInput = (e) => setKeyword(e.target.value)

  const resetKeyword = () => keywordLength && setKeyword('')

  const handleSubmit: ChangeEventForm = (e) => {
    e.preventDefault()
    if (!keywordLength) return console.error('Inserta tu busqueda')
    console.log(keyword)
  }

  return (
    <StyledFormSearch onSubmit={handleSubmit}>
      <input type='checkbox' name='check' id='check' />
      <BoxInputSearch>
        <input type='text' name='keywordSearch' id='keywordSearch' value={keyword} onChange={handleChange} />
        {
          keywordLength && <IconsBoxInput resetKeyword={resetKeyword} />
        }
      </BoxInputSearch>
      <label htmlFor='check' onClick={resetKeyword}>
        <Icon iconStyle='fas' icon='search' size='1x' />
      </label>
    </StyledFormSearch>
  )
}

export default FormSearch

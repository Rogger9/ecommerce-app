import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChangeEventForm, ChangeEventInput } from '../../../types'
import IconsBoxInput from './IconsBoxInput'
import Icon from '../../Icon'
import { $HOME, $PRODUCTS } from '../../../routes'
import { menuNav } from '../../../utils/menuNav'
import { BoxInputSearch, StyledFormSearch } from './style'

const { subMenu } = menuNav[1]
const categoriesNormalize = subMenu?.map(categorie => categorie.toLowerCase().replace(' ', '-'))

const FormSearch = () => {
  const [search, setSearch] = useState<string>('')
  const searchLength: boolean = search.length > 0
  const navegate = useNavigate()

  const handleChange: ChangeEventInput = (e) => setSearch(e.target.value)

  const resetKeyword = () => searchLength && setSearch('')

  const handleSubmit: ChangeEventForm = (e) => {
    e.preventDefault()
    if (!searchLength) return console.error('Inserta tu busqueda')
    const searchNormalize = search.toLowerCase()
    if (!categoriesNormalize?.includes(searchNormalize)) return console.error('Búsqueda no coincide!')
    navegate($HOME + $PRODUCTS + `/${searchNormalize}`)
  }

  return (
    <StyledFormSearch onSubmit={handleSubmit}>
      <input type='checkbox' name='check' id='check' />
      <BoxInputSearch>
        <input type='text' name='keywordSearch' id='keywordSearch' value={search} onChange={handleChange} />
        { searchLength && <IconsBoxInput resetKeyword={resetKeyword} /> }
      </BoxInputSearch>
      <label htmlFor='check' onClick={resetKeyword}>
        <Icon iconStyle='fas' icon='search' size='1x' />
      </label>
    </StyledFormSearch>
  )
}

export default FormSearch

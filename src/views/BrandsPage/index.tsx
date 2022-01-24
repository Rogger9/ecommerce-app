import { listBrands } from '../../utils/listBrands'
import { StyledBrandsPage } from './style'

const BrandsPage = () => (
  <StyledBrandsPage>
    {
      listBrands.map((brand: string, index: number) => (
        <div key={brand + index} title='Brand image'>
          <img src={brand} alt={`${brand} image`} width='240' height='240' />
        </div>
      ))
    }
  </StyledBrandsPage>
)

export default BrandsPage

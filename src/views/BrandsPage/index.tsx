import { listBrands } from '../../utils/listBrands'
import { StyledBrandsPage, StyledContentImage } from './style'

const BrandsPage = () => (
  <StyledBrandsPage>
    {
      listBrands.map((brand: string, index: number) => (
        <StyledContentImage key={brand + index} title='Brand image' delay={index}>
          <img src={brand} alt={`${brand} image`} width='240' height='240' />
        </StyledContentImage>
      ))
    }
  </StyledBrandsPage>
)

export default BrandsPage

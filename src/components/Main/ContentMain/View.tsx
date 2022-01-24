import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { GlobalStateProvier } from '../../../context/GlobalState'
import { $ABOUT, $BRANDS, $CATEGORY, $DETAIL, $PRODUCTS, $PRODUCTSDETAIL, $SERVICES } from '../../../routes'
import { StyledView } from './style'

const Slider = lazy(() => import('../../Slider'))
const ListOfProducts = lazy(() => import('../../Products/ListOfProducts'))
const About = lazy(() => import('../../../views/About'))
const ServicesPage = lazy(() => import('../../../views/ServicesPage'))
const ProductDetail = lazy(() => import('../../Products/ProductDetail'))
const BrandsPage = lazy(() => import('../../../views/BrandsPage'))

const InHome = () => (
  <>
    <Slider />
    <ListOfProducts />
  </>
)

const View = () => (
  <GlobalStateProvier>
    <StyledView>
      <Routes>
        <Route index element={<InHome />} />
        <Route path={$ABOUT} element={<About />} />
        <Route path={$PRODUCTS + $CATEGORY} element={<ListOfProducts />} />
        <Route path={$SERVICES} element={<ServicesPage />} />
        <Route path={$PRODUCTSDETAIL + $DETAIL} element={<ProductDetail />} />
        <Route path={$BRANDS} element={<BrandsPage />} />
      </Routes>
    </StyledView>
  </GlobalStateProvier>
)

export default View

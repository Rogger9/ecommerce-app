import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { $ABOUT, $DETAIL, $PRODUCT } from '../../../routes'
import listProducts from '../../../utils/listProducts'
import { StyledView } from './style'

const Slider = lazy(() => import('../../Slider'))
const ShowProducts = lazy(() => import('../../Products/ShowProducts'))
const About = lazy(() => import('../../../views/About'))
const ProductDetail = lazy(() => import('../../Products/ProductDetail'))

const InHome = () => (
  <>
    <Slider />
    <ShowProducts products={listProducts} />
  </>
)

const View = () => (
  <StyledView>
    <Routes>
      <Route index element={<InHome />} />
      <Route path={$ABOUT} element={<About />} />
      <Route path={$PRODUCT + $DETAIL} element={<ProductDetail />} />
    </Routes>
  </StyledView>
)

export default View

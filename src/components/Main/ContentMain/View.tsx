import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { $ABOUT } from '../../../routes'
import { StyledView } from './style'

const Slider = lazy(() => import('../../Slider'))
const ShowProducts = lazy(() => import('../../Products/ShowProducts'))
const About = lazy(() => import('../../../views/About'))

const InHome = () => (
  <>
    <Slider />
    <ShowProducts />
  </>
)

const View = () => (
  <StyledView>
    <Routes>
      <Route index element={<InHome />} />
      <Route path={$ABOUT} element={<About />} />
    </Routes>
  </StyledView>
)

export default View

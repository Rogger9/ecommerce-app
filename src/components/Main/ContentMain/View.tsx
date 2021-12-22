import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { $ABOUT } from '../../../routes'
import { StyledView } from './style'

const Slider = lazy(() => import('../../Slider'))
const About = lazy(() => import('../../../views/About'))

const View = () => (
  <StyledView>
    <Routes>
      <Route index element={<Slider />} />
      <Route path={$ABOUT} element={<About />} />
    </Routes>
  </StyledView>
)

export default View

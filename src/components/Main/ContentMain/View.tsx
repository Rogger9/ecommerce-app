import { Route, Routes } from 'react-router-dom'
import { $ABOUT } from '../../../routes'
import About from '../../../views/About'
import Slider from '../../Slider'
import { StyledView } from './style'

const View = () => (
  <StyledView>
    <Routes>
      <Route index element={<Slider />} />
      <Route path={$ABOUT} element={<About />} />
    </Routes>
  </StyledView>
)

export default View

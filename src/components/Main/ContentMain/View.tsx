import { Route, Routes } from 'react-router-dom'
import Slider from '../../Slider'
import { StyledView } from './style'

const View = () => (
  <StyledView>
    <Routes>
      <Route index element={<Slider />} />
    </Routes>
  </StyledView>
)

export default View

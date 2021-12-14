import { useSlider } from '../../hooks/useSlider'
import { sliderImages } from '../../utils/sliderImages'
import Icon from '../Icon'
import { StyledIconsContent, StyledSlider } from './style'

const inicialState = 0
const restartState: number = sliderImages.length - 1

const Slider = () => {
  const { counter, setCounter } = useSlider({ inicialState, restartState })
  const selectImage = (index: number) => setCounter(index)

  return (
    <StyledSlider title='slider'>
      <img loading='lazy' src={sliderImages[counter]} alt='slider' />
      <StyledIconsContent>
        {
          sliderImages.map((img, index) => <Icon key={index} iconStyle='fas' icon='circle' handleClick={() => selectImage(index)} classN={img === sliderImages[counter] ? 'active' : undefined} />)
        }
      </StyledIconsContent>
    </StyledSlider>
  )
}

export default Slider

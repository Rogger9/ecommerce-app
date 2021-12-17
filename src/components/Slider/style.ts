import styled from 'styled-components'
import { SectionFlex } from '../../styles/SectionFlex'

export const StyledSlider = styled(SectionFlex)`
  height: 14rem;
  margin: .4rem 0;
  position: relative;
  font-size: .88rem;

  img {
    height: 100%;
    object-fit: contain;
    border-radius: .2rem;
  }

  @media ( max-width: 850px ) {
    height: 12rem;
  }

  @media ( max-width: 768px ) {
    height: 10rem;
    font-size: .6rem;
  }

  @media ( max-width: 480px ) {
    height: 8rem;
  }

  @media ( max-width: 380px ) {
    height: 6rem;
  }
`

export const StyledIconsContent = styled.div`
  color: #E0E0E0;
  position: absolute;
  bottom: 0;
  margin: .2rem 0;
  font-size: .7rem;
  cursor: pointer;

  & > * { margin: 0 .2rem; filter: drop-shadow(0 0 1px var(--blackOpacity)); }

  .active {
    opacity: .3;
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    font-size: .5rem;
  }
`

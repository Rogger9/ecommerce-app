import styled from 'styled-components'
import { DivFlex } from '../../styles/DivFlex'
import { SectionFlex } from '../../styles/SectionFlex'

export const StyledShowProducts = styled(SectionFlex)`
  margin: 3rem 1rem;
  flex-wrap: wrap;
  gap: 4rem;
`

export const StyledProductCard = styled(DivFlex)`
  width: 20rem;
  background: var(--contrast);
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  border-radius: .3rem;
  gap: .6rem;
  transition: transform .2s ease-in-out;
  box-shadow:
    0 0 6px var(--blackOpacity),
    inset 0 0 6px var(--blackOpacity)
  ;

  img {
    border-radius: .2rem;
    object-fit: contain;
  }

  footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h3 { color: var(--green); }

  &:hover {
    box-shadow:
    0 0 12px var(--blackOpacity),
    inset 0 0 6px var(--blackOpacity)
  ;
  }
`

export const StyledProductDetail = styled(DivFlex)`
  height: 100%;
  flex-direction: column;
  gap: 4rem;
`

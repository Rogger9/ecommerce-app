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
  background: var(--fontColor);
  color: var(--black);
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  border-radius: .3rem;
  gap: .6rem;

  img {
    width: 12rem;
    border-radius: .2rem;
    object-fit: contain;
  }

  footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h3 { color: var(--red); }
`

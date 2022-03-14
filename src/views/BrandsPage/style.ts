import styled from 'styled-components'
import { SectionContentMain } from '../../styles/SectionContentMain'

interface IProps {
  delay: number
}

export const StyledBrandsPage = styled(SectionContentMain)`
  gap: 4rem;
  flex-wrap: wrap;
`

export const StyledContentImage = styled.div<IProps>`
  background: var(--contrast);
  padding: 1.4rem;
  border-radius: .2rem;
  animation: ${({ delay }) => `moveDelay .6s ${delay}s ease-in-out`};
  visibility: hidden;
  animation-fill-mode: both;

  img {
    width: 100%;
    object-fit: contain;
    border-radius: .2rem;
  }

  @media (max-width: 320px) {
    width: 17rem;
  }
`

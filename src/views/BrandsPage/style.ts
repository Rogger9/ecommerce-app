import styled from 'styled-components'
import { SectionContentMain } from '../../styles/SectionContentMain'

export const StyledBrandsPage = styled(SectionContentMain)`
  gap: 4rem;
  flex-wrap: wrap;

  div {
    background: var(--fontColor);
    color: var(--black);
    padding: 1.4rem;
    border-radius: .2rem;

    img {
      width: 100%;
      object-fit: contain;
      border-radius: .2rem;
    }

    @media (max-width: 320px) {
      width: 17rem;
    }
  }
`

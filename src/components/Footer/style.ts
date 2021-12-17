import styled from 'styled-components'
import { SectionFlex } from '../../styles/SectionFlex'

export const StyledFooter = styled.footer`
  grid-area: footer;
  width: 100%;
  background: var(--secundary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0 2rem;
  padding: .4rem 1rem;

  svg:hover { filter: drop-shadow(0 0 1px var(--shadow)); }

  span { width: 8rem; }

  @media (max-width: 480px) {
    flex-wrap: wrap;
    justify-content: space-around;
    gap: .4rem 1rem;
  }
`

export const StyledIcons = styled(SectionFlex)`
  gap: 1rem;
`

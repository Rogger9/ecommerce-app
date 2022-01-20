import styled from 'styled-components'
import { SectionContentMain } from '../../styles/SectionContentMain'

export const StyledAbout = styled(SectionContentMain)`
  flex-direction: column;
  gap: 2rem;
  animation: moveDown .4s ease-in;

  img { object-fit: contain; }

  article {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0 4rem;
    text-align: justify;
    font-size: 1.1rem;
  }

  @media (max-width: 560px) {
    article { padding: 0; }
  }
`

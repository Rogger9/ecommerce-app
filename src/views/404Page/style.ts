import styled from 'styled-components'
import { DivFlex } from '../../styles/DivFlex'

export const StyledPageError = styled(DivFlex)`
  h1 {
    font-size: 3rem;
    font-family: 'Courier New', Courier, monospace;
    padding: 1rem;
    line-height: 6rem;

    a {
      color: var(--contrast);

      &:hover {
        color: var(--contrast);
        text-decoration: underline;
      }
    }

    @media (max-width: 480px) {
      font-size: 2rem;
      line-height: 4rem;
    }
  }
`

import styled from 'styled-components'

export const StyledMain = styled.main`
  grid-area: main;
  display: grid;
  grid:
    'nav' 'main' 1fr /
    auto    1fr
  ;
  height: calc(100vh - 4rem);

  @media (max-width: 768px) {
    grid:
      'nav' auto
      'main'  1fr /
      100%
    ;
  }
`

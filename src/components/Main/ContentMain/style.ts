import styled from 'styled-components'

export const StyledContentMain = styled.div`
  width: 100%;
  display: grid;
  grid:
    'view' 1fr
    'footer' auto /
    100%
  ;
`

export const StyledView = styled.div`
  grid-area: view;
`

import styled from 'styled-components'

export const StyledSwitchNavBar = styled.label`
  display: flex;
  flex-direction: column;

  svg {
    position: absolute;
    top: 0;
    right: 0;
    margin: .6rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    svg { top: auto; bottom: 0; }
  }
`

export const StyledNavBar = styled.nav`
  grid-area: nav;
  background: var(--secundary);
  min-height: calc(100vh - 4rem);
  border-radius: .2rem;
  padding: 2rem 0;
  position: relative;

  input { display: none; }

  input:checked ~ ul { width: 3rem; }

  @media (max-width: 768px) {
    min-height: auto;
    padding: 0 2rem 0 0;
    border-radius: 0;

    input:checked ~ ul { width: 100%; flex-direction: column; }
  }
`

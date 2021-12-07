import styled from 'styled-components'

export const StyledSwitchNavBar = styled.label`
  display: flex;
  flex-direction: column;
  padding: 1.6rem 1rem;
  position: relative;

  svg {
    position: absolute;
    top: 0;
    right: 0;
    margin: .4rem;
    cursor: pointer;
  }

  input { display: none; }
`

export const StyledNavBar = styled.nav`
  background: var(--secundary);
  height: calc(100vh - 5.5rem);
  border-radius: .2rem;

  input:checked ~ h3 {
    color: red;
    width: 14rem;
  }
`

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
`

export const StyledNavBar = styled.nav`
  background: var(--secundary);
  height: calc(100vh - 4rem);
  border-radius: .2rem;
  padding: 2rem 0;
  position: relative;

  input { display: none; }

  ul { transition: width .2s ease-in-out; }

  input:checked ~ ul {
    color: red;
    width: 14rem;
  }
`

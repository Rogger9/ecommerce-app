import styled from 'styled-components'

export const StyledHeader = styled.header`
  height: 4rem;
  background: var(--secundary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  a {
    height: 100%;
  }
`

export const StyledLogo = styled.img`
  height: 100%;
  object-fit: contain;
`

export const StyledNav = styled.nav`
  display: flex;
  gap: 1rem;
`

export const StyledFormSearch = styled.form`
  background: red;
`

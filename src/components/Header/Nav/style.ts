import styled from 'styled-components'

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  @media (max-width: 340px) {
    gap: .6rem;
  }
`

export const StyledIconsNav = styled.div`
  display: flex;
  gap: 1.4rem;

  & > svg { cursor: pointer; }
`

import styled from 'styled-components'

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.2rem;
  }

  @media (max-width: 340px) {
    gap: .8rem;
  }
`

export const StyledIconsNav = styled.div`
  display: flex;
  gap: 1.4rem;

  & > svg { cursor: pointer; }
`

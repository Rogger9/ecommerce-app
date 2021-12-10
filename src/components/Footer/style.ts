import styled from 'styled-components'

export const StyledFooter = styled.footer`
  width: 100%;
  background: var(--secundary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0 2rem;
  padding: .4rem 1rem;

  svg:hover { filter: drop-shadow(0 0 1px var(--shadow)); }

  span { width: 8rem; }

  @media (max-width: 480px) {
    flex-wrap: wrap;
    justify-content: space-around;
  }
`

export const StyledIcons = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  line-height: 1.6rem;
`

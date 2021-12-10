import styled from 'styled-components'

export const StyledMobileMenu = styled.label`
  padding: 0 .6rem;
  position: relative;
  cursor: pointer;

  input { display: none }

  input:checked ~ ul { display: flex; }
`

export const StyledListMobileMenu = styled.ul`
  width: 14rem;
  background: var(--secundary);
  padding: 1rem;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2.8rem;
  right: 0;
  border-radius: .2rem;
  box-shadow: 0 0 3px 1px var(--shadow);
  list-style: none;
  line-height: 2.4rem;
  font-weight: bold;
  z-index: 100;

  & > li { width: 100%; }
`

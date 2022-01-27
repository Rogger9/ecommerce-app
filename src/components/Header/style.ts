import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: 100%;
  height: 4rem;
  background: var(--secundary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.4rem;

  a:first-child { height: 100%; }

  @media (max-width: 340px) {
    padding: 0 .8rem;
  }
`

export const StyledLogo = styled.img`
  height: 100%;
  object-fit: contain;
`

export const StyledSwitch = styled.label`
  width: 2.2rem;
  height: 1.2rem;
  background: var(--contrast);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

  input { display: none; }

  span {
    width: 1rem;
    height: 1rem;
    background: var(--secundary);
    border-radius: 50%;
    position: absolute;
    left: 0;
    margin: 0 2px;
    transition: transform .2s ease-in;
  }

  span:hover {
    box-shadow: inset 0 0 3px var(--contrast);
  }

  input:checked ~ span { transform: translateX(.86rem); }
`

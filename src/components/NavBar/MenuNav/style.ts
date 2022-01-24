import styled from 'styled-components'

export const StyledMenuNav = styled.ul`
  width: 14rem;
  line-height: 3rem;
  list-style: none;
  font-weight: bold;
  transition: width .2s ease-in-out;

  svg { cursor: pointer; }

  @media (max-width: 768px) {
    width: auto;
    display: flex;
    justify-content: space-evenly;
  }
`

export const StyledLiMenu = styled.li`
  position: relative;
  border-radius: .2rem;
  border-bottom: 1px solid var(--contrast);

  div { width: 3rem; }

  a {
    display: flex;
    gap: .6rem;
  }

  svg:nth-child(2) {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);
    margin-right: 1rem;
  }

  ul {
    background: var(--secundary);
    position: absolute;
    top: 0;
    left: 100%;
    border-radius: .2rem;
    box-shadow: 0 0 1px 1px var(--shadow);
    z-index: 20;
    visibility: hidden;
    opacity: 0;
    transition: visibility .2s ease-in;

    li { padding: 0 2rem; }
  }

  &:hover { background: var(--contrast); }

  &:hover > ul { visibility: visible; opacity: 1; }

  @media (max-width: 768px) {
    border-bottom: none;

    a { gap: 6rem; }

    ul {
      display: flex;
      flex-direction: column;
      top: 100%;
      left: auto;
      right: 0;
    }
  }

  @media (max-width: 420px) {
    a { gap: 2rem; }

    ul { left: 0; right: auto; }
  }
`

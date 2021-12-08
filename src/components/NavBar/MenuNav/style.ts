import styled from 'styled-components'

export const StyledMenuNav = styled.ul`
  line-height: 3rem;
  list-style: none;
  font-weight: bold;

  svg { cursor: pointer; }
`

export const StyledLiMenu = styled.li`
  position: relative;
  padding-right: 1rem;
  border-radius: .2rem;

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
    display: none;
    position: absolute;
    top: 0;
    left: 100%;
    border-radius: .2rem;
    box-shadow: 0 0 2px var(--blackOpacity);

    li { padding: 0 2rem; }
  }

  &:hover { background: var(--contrast); }

  &:hover > ul { display: block; }
`

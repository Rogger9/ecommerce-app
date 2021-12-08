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
  height: calc(100vh - 5.5rem);
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

export const StyledListNav = styled.ul`
  line-height: 3rem;
  list-style: none;
  font-weight: bold;

  li {
    position: relative;
    padding-right: 1rem;
  }

  svg { cursor: pointer; }

  li div { width: 3rem; }

  li a {
    display: flex;
    gap: .6rem;
  }

  li svg:nth-child(2) {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);
    margin-right: 1rem;
  }

  li ul {
    background: var(--secundary);
    display: none;
    position: absolute;
    top: 0;
    left: 100%;
    border-radius: .2rem;
    padding: 1rem;
    box-shadow: 0 0 2px var(--blackOpacity);
  }

  li:hover > ul {
    display: block;
  }
`

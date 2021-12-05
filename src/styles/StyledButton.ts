import styled from 'styled-components'

export const StyledButton = styled.button`
background: #FFF;
  border-radius: .3rem;
  border: 1px solid var(--shadow);
  outline: none;
  padding: .1rem .2rem;
  font-weight: bold;
  cursor: pointer;

  &:active { transform: scale(.9) }

  &:hover {
    background: var(--contrast);
    border: 1px solid var(--contrast)
  }
`

import styled from 'styled-components'

interface IProps {
  page: boolean
}

export const StyledButton = styled.button<IProps>`
  background: #FFF;
  border-radius: .3rem;
  border: 1px solid var(--blackOpacity);
  outline: none;
  padding: ${({ page }) => page ? '.6rem' : '.1rem .2rem'};
  font-weight: bold;
  cursor: pointer;

  &:active { transform: scale(.96) }

  &:hover {
    background: ${({ page }) => page ? 'var(--primary)' : 'var(--contrast)'};
    border: 1px solid var(--blackOpacity);
    color: ${({ page }) => page ? 'var(--fontColor)' : undefined};
  }
`

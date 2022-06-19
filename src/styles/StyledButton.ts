import styled from 'styled-components'

interface IProps {
  page: boolean
}

export const StyledButton = styled.button<IProps>`
  background: #fff;
  color: black;
  padding: ${({ page }) => (page ? '8px 16px' : '2px 4px')};
  font-weight: bold;
  border: ${({ theme }) => theme.border.solid};
  outline: none;
  border-radius: ${({ theme }) => theme.border.radius};
  box-shadow: 0 0 2px 1px black, inset 0 0 2px black;
  cursor: pointer;

  &:active {
    transform: scale(0.96);
  }

  &:hover {
    background: ${({ page, theme }) => (page ? theme.colors.primary : theme.colors.contrast)};
    color: ${({ page, theme }) => page && theme.colors.text};
  }
`

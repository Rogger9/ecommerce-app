import styled from 'styled-components'
import { DivFlex } from './DivFlex'

export const ContainerApp = styled(DivFlex)`
  flex-direction: column;
  min-height: 100vh;
  text-align: center;

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
  }
`

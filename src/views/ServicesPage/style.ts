import styled from 'styled-components'
import { DivFlex } from '../../styles/DivFlex'
import { SectionContentMain } from '../../styles/SectionContentMain'

export const StyledServicesPage = styled(SectionContentMain)`
  flex-direction: column;
  gap: 4rem;
  animation: move 1s ease-in;

  @keyframes move {
    0% { transform: translate(0, -.2%) }
    100% { transform: translate(0, 0) }
  }
`

export const StyledService = styled(DivFlex)`
  flex-direction: column;
  border: 1px solid var(--shadow);
  border-radius: .3rem;
  padding: 1.4rem;
  gap: 1rem;
`

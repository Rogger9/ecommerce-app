import styled from 'styled-components'

export const StyledAbout = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  animation: move 2s ease-in-out;

  @keyframes move {
    0% { transform: translate(0, -2%) }
    100% { transform: translate(0, 0) }
  }

  img { object-fit: contain; }

  article {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0 4rem;
    text-align: justify;
    font-size: 1.1rem;
  }

  @media (max-width: 560px) {
    article { padding: 0; }
  }
`

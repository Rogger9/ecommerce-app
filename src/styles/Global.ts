import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #3B75A9;
    --secundary: #23649E;
    --contrast: #EEEEEE;
    --fontColor: #FFF;
    --shadow: #3066A74D;
    --white: #FCFCFC;
    --black: #2C2C2C;
    --blackOpacity: #2C2C2C99;
    --green: #3D805F;
    --red: #B74545;
  }

  [theme='light'] {
    --primary: #DCECFF;
    --secundary: #CCE3FF;
    --contrast: #A6C7F1;
    --fontColor: #2C2C2C;
    --shadow: #9BBDE74D;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    position: relative;
  }

  body {
    font-family: ${({ theme }) => theme.font.family};
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    scroll-behavior: smooth;
  }

  @keyframes moveDown {
    0% { transform: translate(0, -.3%); opacity: 0; }
    100% { transform: translate(0, 0); opacity: 1; }
  }

  @keyframes moveDelay {
    0% {
      transform: translate(-1%, -2%);
      opacity: 0;
    }
    100% {
      transform: translate(0, 0);
      opacity: 1;
      visibility: visible;
    }
  }
`

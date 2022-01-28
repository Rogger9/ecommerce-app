import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #262D39;
    --fontColor: #FFF;
    --colorSwitch: #262C37;
    --colorBallSwitch: #20242b;
    --secundary: #20262E;
    --shadow: #C4C4C499;
    --contrast: #9BA4B4;
    --black: #2C2C2C;
    --blackOpacity: #2C2C2C99;
    --green: #3D805F;
    --red: #B74545;
    --white: #FCFCFC;
  }

  [theme='light'] {
    --primary: #F1F6F9;
    --fontColor: #2C2C2C;
    --colorSwitch: #DDE3E7;
    --colorBallSwitch: #E5E5E6;
    --secundary: #E4E8E9;
    --shadow: #2C2C2C;
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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: var(--primary);
    color: var(--fontColor);
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

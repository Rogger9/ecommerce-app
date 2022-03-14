import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    /* --primary: #262D39;
    --fontColor: #FFF;
    --secundary: #20262E;
    --shadow: #C4C4C499;
    --contrast: #9BA4B4;
    --black: #2C2C2C;
    --blackOpacity: #2C2C2C99;
    --green: #3D805F;
    --red: #B74545;
    --white: #FCFCFC; */

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
    /* --primary: #F1F6F9;
    --secundary: #E4E8E9;
    --contrast: #EEEEEE;
    --fontColor: #2C2C2C;
    --shadow: #2C2C2C4D; */

    --primary: #DCECFF;
    --secundary: #CCE3FF;
    /* --contrast: #B5CFF0; */
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

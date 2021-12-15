import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles/Global'
import { ContainerApp } from './styles/ContainerApp'
import { checkPrevUserTheme } from './utils/checkUserTheme'
import Home from './views/Home'

function App () {
  checkPrevUserTheme()

  return (
    <BrowserRouter>
      <GlobalStyles />
      <ContainerApp>
        <Home />
      </ContainerApp>
    </BrowserRouter>
  )
}

export default App

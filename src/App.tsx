import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles/Global'
import { ContainerApp } from './styles/ContainerApp'
import Header from './components/Header'
import { checkPrevUserTheme } from './utils/checkUserTheme'
import Main from './components/Main'

function App () {
  checkPrevUserTheme()

  return (
    <BrowserRouter>
      <GlobalStyles />
      <ContainerApp>
        <Header />
        <Main />
      </ContainerApp>
    </BrowserRouter>
  )
}

export default App

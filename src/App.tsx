import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles/Global'
import { ContainerApp } from './styles/ContainerApp'
import Header from './components/Header'
import { checkPrevUserTheme } from './utils/checkUserTheme'

function App () {
  checkPrevUserTheme()

  return (
    <BrowserRouter>
      <GlobalStyles />
      <ContainerApp>
        <Header />
        <h1>Ecommerce App</h1>
      </ContainerApp>
    </BrowserRouter>
  )
}

export default App

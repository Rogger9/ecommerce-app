import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyles } from './styles/Global'
import { ContainerApp } from './styles/ContainerApp'
import { checkPrevUserTheme } from './utils/checkUserTheme'
import Home from './views/Home'
import { $ACCOUNTS, $HOME } from './routes'
import SessionForm from './views/SessionForm'

function App () {
  checkPrevUserTheme()

  return (
    <BrowserRouter>
      <GlobalStyles />
      <ContainerApp>
        <Routes>
          <Route path={$HOME + '/*'} element={<Home />} />
          <Route path={$HOME + $ACCOUNTS + '/*'} element={<SessionForm />} />
        </Routes>
      </ContainerApp>
    </BrowserRouter>
  )
}

export default App

import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyles } from './styles/Global'
import { ContainerApp } from './styles/ContainerApp'
import { checkPrevUserTheme } from './utils/checkUserTheme'
import { $ACCOUNTS, $HOME } from './routes'
import { GlobalStateProvier } from './context/GlobalState'

const Home = lazy(() => import('./views/Home'))
const SessionForm = lazy(() => import('./views/SessionForm'))

function App () {
  checkPrevUserTheme()

  return (
    <BrowserRouter>
      <GlobalStateProvier>
        <Suspense fallback={<h2>Cargando...</h2>}>
          <GlobalStyles />
          <ContainerApp>
            <Routes>
              <Route path={$HOME + '/*'} element={<Home />} />
              <Route path={$HOME + $ACCOUNTS + '/*'} element={<SessionForm />} />
            </Routes>
          </ContainerApp>
        </Suspense>
      </GlobalStateProvier>
    </BrowserRouter>
  )
}

export default App

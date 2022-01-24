import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyles } from './styles/Global'
import { ContainerApp } from './styles/ContainerApp'
import { checkPrevUserTheme } from './utils/checkUserTheme'
import { $ACCOUNTS, $HOME } from './routes'

const Home = lazy(() => import('./views/Home'))
const SessionForm = lazy(() => import('./views/SessionForm'))
const PageError = lazy(() => import('./views/404Page'))

function App () {
  checkPrevUserTheme()

  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <GlobalStyles />
        <ContainerApp>
          <Routes>
            <Route path={$HOME + '/*'} element={<Home />} />
            <Route path={$HOME + $ACCOUNTS + '/*'} element={<SessionForm />} />
            <Route path='*' element={<PageError />} />
          </Routes>
        </ContainerApp>
      </Suspense>
    </BrowserRouter>
  )
}

export default App

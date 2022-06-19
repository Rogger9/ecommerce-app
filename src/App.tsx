import { $ACCOUNTS, $HOME } from '@routes'
import { RootState } from '@store/reducers/rootReducer'
import { ContainerApp } from '@styles/ContainerApp'
import { GlobalStyles } from '@styles/Global'
import { checkPrevUserTheme } from '@utils/checkUserTheme'
import { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme, theme } from './theme'

const Home = lazy(() => import('@views/Home'))
const SessionForm = lazy(() => import('@views/SessionForm'))
const PageError = lazy(() => import('@views/404Page'))

function App() {
  checkPrevUserTheme()

  const { theme: themeUser } = useSelector((state: RootState) => state.themeReducer)
  const mode = themeUser === 'light' ? lightTheme : darkTheme

  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <ThemeProvider theme={theme(mode)}>
          <GlobalStyles />
          <ContainerApp>
            <Routes>
              <Route path={$HOME + '/*'} element={<Home />} />
              <Route path={$HOME + $ACCOUNTS + '/*'} element={<SessionForm />} />
              <Route path='*' element={<PageError />} />
            </Routes>
          </ContainerApp>
        </ThemeProvider>
      </Suspense>
    </BrowserRouter>
  )
}

export default App

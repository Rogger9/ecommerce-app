import { useTheme } from '@hooks/useTheme'
import { $ACCOUNTS, $HOME } from '@routes'
import { ContainerApp } from '@styles/ContainerApp'
import { GlobalStyles } from '@styles/Global'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

const Home = lazy(() => import('@views/Home'))
const SessionForm = lazy(() => import('@views/SessionForm'))
const PageError = lazy(() => import('@views/404Page'))

function App() {
  const { themeUser } = useTheme()

  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <ThemeProvider theme={themeUser}>
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

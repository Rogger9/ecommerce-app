import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyles } from './styles/Global'
import { ContainerApp } from './styles/ContainerApp'
import { checkPrevUserTheme } from './utils/checkUserTheme'
import Home from './views/Home'
import { $HOME } from './routes'

function App () {
  checkPrevUserTheme()

  return (
    <BrowserRouter>
      <GlobalStyles />
      <ContainerApp>
        <Routes>
          <Route path={$HOME + '/*'} element={<Home />} />
        </Routes>
      </ContainerApp>
    </BrowserRouter>
  )
}

export default App

import { createContext, ReactNode, useState } from 'react'
import { IProducts } from '../types'

const GlobalState = createContext({})

export const GlobalStateProvier = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<IProducts[]>([])
  return (
    <GlobalState.Provider value={{ products, setProducts }}>
      {children}
    </GlobalState.Provider>
  )
}

export default GlobalState

import { createContext, useState } from 'react'
import { IProducts } from '../types'

interface IContext {
  products?: IProducts[]
  setProducts?: React.Dispatch<React.SetStateAction<IProducts[]>>
}

const GlobalState = createContext<IContext>({})

export const GlobalStateProvier = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<IProducts[]>([])
  return (
    <GlobalState.Provider value={{ products, setProducts }}>
      {children}
    </GlobalState.Provider>
  )
}

export default GlobalState

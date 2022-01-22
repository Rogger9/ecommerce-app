import { useContext } from 'react'
import GlobalState from '../context/GlobalState'

export const useProducts = () => {
  const { products, setProducts } = useContext(GlobalState)
  return { products, setProducts }
}

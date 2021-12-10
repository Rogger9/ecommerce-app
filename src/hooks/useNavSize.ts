import { useEffect, useState } from 'react'
import { useScreenWidth } from './useScreenWidth'

export const useNavSize = () => {
  const { isMobileScreen } = useScreenWidth()
  const [isNormalSize, setSize] = useState<boolean>(true)
  const changeSize = () => setSize(state => !state)
  useEffect(() => {
    changeSize()
  }, [isMobileScreen])
  return { isNormalSize, changeSize }
}

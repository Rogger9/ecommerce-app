import { useState } from 'react'

export const useNavSize = () => {
  const [isNormalSize, setSize] = useState<boolean>(true)
  const changeSize = () => setSize(state => !state)
  return { isNormalSize, changeSize }
}
